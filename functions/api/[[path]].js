// Cloudflare Pages Function — /api/* (ping, sync, vr)
// Cloudflare Pages project settings မှာ လိုတာ:
//   - Binding  : D1 database → variable name `DB`
//   - Secret   : `SHOP_PASSWORD` (ဆိုင် password — app ရဲ့ ဆက်တင်မှာ ထည့်ရမယ့်ဟာ)
// Table တွေကို ပထမဆုံး request မှာ အလိုအလျောက် ဆောက်တယ်။

const KINDS = new Set(['jobs', 'expenses', 'parts', 'settings']);
const MAX_CHANGES = 40;       // request တစ်ခုမှာ ပို့လို့ရတဲ့ record အများဆုံး (D1 query limit အောက်မှာနေအောင်)
const PAGE = 1000;            // pull တစ်ခါမှာ ပြန်ပို့မယ့် row အများဆုံး
let schemaReady = false;

async function ensureSchema(db) {
  if (schemaReady) return;
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS records (
      kind TEXT NOT NULL, id TEXT NOT NULL, data TEXT, updated_at INTEGER NOT NULL,
      deleted INTEGER NOT NULL DEFAULT 0, rev INTEGER NOT NULL, PRIMARY KEY (kind, id))`),
    db.prepare(`CREATE INDEX IF NOT EXISTS records_rev ON records (rev)`),
    db.prepare(`CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v INTEGER NOT NULL)`),
  ]);
  schemaReady = true;
}

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
  status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});

// password ကို အချိန်တူ နှိုင်းယှဉ် (timing attack မဖြစ်အောင်)
function safeEqual(a, b) {
  a = String(a); b = String(b);
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0;
}

const UPSERT = `INSERT INTO records (kind, id, data, updated_at, deleted, rev)
  VALUES (?1, ?2, ?3, ?4, ?5, (SELECT COALESCE(MAX(rev), 0) + 1 FROM records))
  ON CONFLICT (kind, id) DO UPDATE SET
    data = excluded.data, updated_at = excluded.updated_at, deleted = excluded.deleted, rev = excluded.rev
  WHERE excluded.updated_at > records.updated_at`;   // last-write-wins: ပိုအသစ်ဖြစ်မှ အစားထိုး

export async function onRequest({ request, env, params }) {
  const path = [].concat(params.path || []).join('/');
  if (!env.DB || !env.SHOP_PASSWORD) return json({ error: 'not_configured' }, 503);
  if (!safeEqual(request.headers.get('x-shop-key') || '', env.SHOP_PASSWORD)) return json({ error: 'unauthorized' }, 401);
  await ensureSchema(env.DB);

  if (path === 'ping') return json({ ok: true });
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
  const body = await request.json().catch(() => ({}));

  // Vr No. ခွဲပေးခြင်း — စက်အားလုံးကြား နံပါတ်မထပ်အောင် server က တစ်နေရာတည်းကနေ ပေး
  if (path === 'vr') {
    const min = Math.max(1, Math.floor(Number(body.min) || 1));
    const row = await env.DB.prepare(
      `INSERT INTO meta (k, v) VALUES ('vr', ?1) ON CONFLICT (k) DO UPDATE SET v = MAX(meta.v + 1, ?1) RETURNING v`,
    ).bind(min).first();
    return json({ vr: row.v });
  }

  // Sync — ဒီစက်က ပြောင်းထားတာတွေ ပို့ (push) + တခြားစက်က ပြောင်းထားတာတွေ ယူ (pull)
  if (path === 'sync') {
    const changes = Array.isArray(body.changes) ? body.changes.slice(0, MAX_CHANGES) : [];
    const stmts = [];
    for (const c of changes) {
      if (!c || !KINDS.has(c.kind) || typeof c.id !== 'string' || !c.id || c.id.length > 64) continue;
      const data = c.deleted ? null : JSON.stringify(c.data ?? null);
      if (data && data.length > 500000) continue;
      stmts.push(env.DB.prepare(UPSERT).bind(c.kind, c.id, data, Math.floor(Number(c.updatedAt) || 0), c.deleted ? 1 : 0));
    }
    if (stmts.length) await env.DB.batch(stmts);   // batch = transaction တစ်ခုတည်း
    const since = Math.max(0, Math.floor(Number(body.since) || 0));
    const { results } = await env.DB.prepare(
      `SELECT kind, id, data, updated_at, deleted, rev FROM records WHERE rev > ?1 ORDER BY rev LIMIT ${PAGE}`,
    ).bind(since).all();
    return json({ rows: results, more: results.length === PAGE });
  }

  return json({ error: 'not_found' }, 404);
}
