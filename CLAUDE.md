# CLAUDE.md — Phone-Service

## ပရောဂျက် ရည်ရွယ်ချက်
ဖုန်းပြင်ဆိုင်တစ်ဆိုင်အတွက် **စာရင်းဇယား ထိန်းသိမ်းတဲ့ tool**။
ဆိုင်က လက်ရှိသုံးနေတဲ့ desktop program ("Mobile Phone Service Management System") ကို **အစားထိုးဖို့** —
ပုံစံ/လုပ်ငန်းစဉ်ကို အတူတူထားပြီး ဖုန်းကနေပါ သုံးလို့ရ၊ install လုပ်လို့ရ၊ offline သုံးလို့ရအောင် လုပ်တာ။

(⚠️ ဖောက်သည် အမည်/ဖုန်းနံပါတ် လို data အစစ်တွေကို repo ထဲ ဘယ်တော့မှ မထည့်ရ — repo က public ဖြစ်နိုင်တယ်)

## လုပ်ငန်းစဉ် (Workflow)
```
ဖုန်းလက်ခံ (+ အသစ်ထည့်) → [လက်ခံစာရင်း]  --▶ ပြင်ပြီး/ထုတ်ယူ-->  [ပြုပြင်ပြီးစာရင်း]
                                  🖨 လက်ခံဘောင်ချာ          ├→ [ဝင်ငွေစာရင်း] (ပစ္စည်းဖိုး + လက်ခ)
                                                             └→ [ပျက်စီးဆုံးရှုံးမှုစာရင်း] (ပြင်ရင်း ပျက်သွားတာရှိရင်)
[ဆိုင်အသုံးစရိတ်စာရင်း] (သီးခြား ထည့်)
[အရှုံး/အမြတ်] = ရက်စွဲအပိုင်းအခြားအလိုက် အားလုံးကို ပေါင်းတွက်
```

## Screen များ (လက်ရှိ program အတိုင်း)
**Home** — tile ၆ ခု (+ ငါတို့က ထပ်ထည့်တဲ့ ပစ္စည်းလက်ကျန်၊ ဆက်တင်)

1. **ဖုန်းပြင်လက်ခံစာရင်း** — ပြင်ဖို့ လက်ခံထားဆဲ ဖုန်းများ
   - Column: Vr No.၊ အမည်၊ ဖုန်းနံပါတ်၊ ဖုန်းအမျိုးအစား၊ IMEI၊ အကြောင်းအရာ၊ Service ဆရာ၊ ခန့်မှန်းကုန်ကျငွေ၊ ဖုန်းအပ်သည့်ရက်
   - Actions: 🖨 Print (လက်ခံဘောင်ချာ)၊ ▶ ပြင်ပြီး/ထုတ်ယူ (ပြုပြင်ပြီးစာရင်းသို့ ရွှေ့)၊ ✏️ ပြင်၊ ❌ ဖျက်
2. **ပြုပြင်ပြီးစာရင်း**
   - Card: ဝင်ငွေစုစုပေါင်း / ပစ္စည်းဖိုးစုစုပေါင်း / လက်ခစုစုပေါင်း / ပျက်စီးဆုံးရှုံးမှုစုစုပေါင်း
   - Column: Vr No.၊ အမည်၊ ဖုန်း၊ အမျိုးအစား၊ IMEI၊ အကြောင်းအရာ၊ Service ဆရာ၊ ဖုန်းအပ်သည့်ရက်၊ ပြုပြင်မှုအခြေအနေ (အောင်မြင်/မအောင်မြင်)
3. **ဝင်ငွေစာရင်း**
   - Card: ဝင်ငွေ / ပစ္စည်းဖိုး / လက်ခ စုစုပေါင်း
   - Column: Vr No.၊ အမည်၊ အမျိုးအစား၊ အကြောင်းအရာ၊ ဖုန်းအပ်သည့်ရက်၊ ဖုန်းထုတ်ယူသည့်ရက်၊ လဲထည့်သည့်ပစ္စည်း၊ ပစ္စည်းဖိုး၊ လက်ခ၊ စုစုပေါင်း
4. **ဆိုင်အသုံးစရိတ်စာရင်း** — ရက်စွဲ၊ အကြောင်းအရာ၊ ငွေပမာဏ (+ ထည့်/ပြင်/ဖျက်)၊ Card: စုစုပေါင်း
5. **ပျက်စီးဆုံးရှုံးမှုစာရင်း** — Vr No.၊ အမျိုးအစား၊ အကြောင်းအရာ၊ ပျက်စီးခဲ့သည့်ပစ္စည်း၊ တန်ဖိုး၊ အရေအတွက်၊
   ငွေပမာဏ၊ Service ဆရာ၊ အပ်ရက်၊ ထုတ်ယူရက်
6. **အရှုံး/အမြတ်စာရင်း** — Date From/To၊ "ပျက်စီးဆုံးရှုံးမှုတန်ဖိုး အပါအဝင် / မပါ" ရွေးချယ်၊ Print
   ```
   ဝင်ငွေစုစုပေါင်း (+)
   လဲထည့်ခဲ့သည့်ပစ္စည်းဖိုးစုစုပေါင်း (−)
   လက်ခစုစုပေါင်း (=)
   ပျက်စီးဆုံးရှုံးမှုတန်ဖိုးစုစုပေါင်း (−)   ← ရွေးချယ်မှုအလိုက်
   ဆိုင်အသုံးစရိတ်စုစုပေါင်း (−)
   အသားတင်အမြတ်
   ```

**List screen တိုင်းမှာ**: "Search By" dropdown (ဘယ် column နဲ့ရှာမလဲ) + Search box၊ Export to Excel၊ ← Back

### ငါတို့ app မှာ ထပ်ထည့်ထားတာ (မူရင်းမှာ မရှိ)
- ရက်စွဲ အပိုင်းအခြား filter (Card စုစုပေါင်းတွေကလည်း filter အလိုက် ပြောင်းတယ်)
- စရံငွေ၊ ပြီးပြီ/ထုတ်ယူ ဘောင်ချာ (ကျန်ငွေ တွက်ပေး)
- ပစ္စည်းလက်ကျန် (stock) screen
- ဆက်တင်: ဆိုင်အမည်/လိပ်စာ/ဖုန်း/ဘောင်ချာမှတ်ချက်၊ Service ဆရာ စာရင်း၊ Backup/Restore
- Home မှာ ယနေ့ အနှစ်ချုပ်

## Data Model (`localStorage` key: `phoneServiceData_v2`)
```js
{ version: 2, nextVr: 1001, lastBackup,
  settings: { shopName, phone, address, note, technicians: [] },
  jobs: [{ id, vr, date /*အပ်ရက်*/, customer, phone, model, imei, problem, tech, estimate, deposit,
           status: 'open' | 'done',
           // status = 'done' ဖြစ်မှ
           result: 'success' | 'fail', pickupDate, partName, partFee, serviceFee,
           damage: { part, value, qty } | null }],
  expenses: [{ id, date, desc, amount }],
  parts: [{ id, name, qty, min, buy, sell }] }
```
- ဝင်ငွေ (စုစုပေါင်း) = `partFee + serviceFee`။ ပျက်စီးမှုငွေ = `damage.value × damage.qty`
- **▶ ထုတ်ယူ dialog** (ဆိုင်ရှင် တောင်းဆိုချက်): ဖုန်းအပ်တုန်းက ထည့်ထားတာတွေ ထပ်ရိုက်စရာမလိုရ —
  `ကျသင့်ငွေ` = `estimate` (ဖောက်သည်ဆီ တောင်းထားတဲ့ဈေး)၊ `partName` = `problem` ကို အလိုအလျောက်ဖြည့်၊
  cursor က ပစ္စည်းဖိုးမှာ။ ပစ္စည်းဖိုး ရိုက်တာနဲ့ **အမြတ် (လက်ခ) = ကျသင့်ငွေ − ပစ္စည်းဖိုး** ကို ဘေးမှာ ချက်ချင်းပြ။
  သိမ်းရင် `serviceFee = charge − partFee` (ဥပမာ 40,000 တောင်း၊ ပစ္စည်းဖိုး 20,000 → အမြတ် 20,000)။
- ပြုပြင်ပြီး/ဝင်ငွေ/ပျက်စီးမှု/အရှုံးအမြတ် အားလုံးက **ထုတ်ယူရက် (`pickupDate`)** နဲ့ တွက်တယ်
- Vr No. = `nextVr` ကနေ အစဉ်လိုက် (1001, 1002, ...)
- `_v1` data ရှိရင် အလိုအလျောက် v2 ကို migrate လုပ်တယ် (`migrateV1`)

## နည်းပညာ ဆုံးဖြတ်ချက်များ
- **Single-file web app**: `index.html` တစ်ဖိုင်တည်း (HTML + CSS + vanilla JS)။ build step မရှိ။
- Screen ပြောင်းတာ hash routing (`#received`, `#completed`, `#income`, `#expenses`, `#damaged`,
  `#profit`, `#parts`, `#settings`)။ List screen ၆ ခုက `VIEWS` config တစ်ခုတည်းကနေ render လုပ်တယ်။
- **External library မသုံး** (offline အလုပ်လုပ်ရမယ်)။
- **UI ဘာသာစကား**: မြန်မာဘာသာ။ ငွေ = ကျပ် (Ks)၊ comma ခြား။ ရက်စွဲပြပုံ `dd-mm-yyyy`။
- **စာလုံး/စာရိုက်ကွက် အရွယ်** (ဆိုင်ရှင် "သေးတယ်" လို့ ပြောပြီး ကြီးထားတာ): `html { font-size:18px }`၊ input/button
  အမြင့် ≥46px၊ size တွေအားလုံး `rem` နဲ့ ရေးပါ (px မသုံးရ — ဘောင်ချာ print မှလွဲ)။ ဆက်တင်မှာ **စာလုံးအရွယ်**
  (16/18/20/22px) ရွေးလို့ရ — စက်တစ်လုံးချင်း (`localStorage` key `phoneServiceFontSize`၊ db ထဲမပါ)။
- ထုတ်ယူ dialog မှာ ပျက်စီးမှု အပိုင်းက `<details>` (နှိပ်မှပွင့်၊ data ရှိရင် အလိုအလျောက်ပွင့်) — laptop screen ထဲ ဆံ့အောင်။
- **Desktop + Mobile** — ဆိုင်မှာ monitor ကြီးနဲ့ ဇယားအကျယ်ကြီး သုံးတယ်၊ ဖုန်းမှာ ဇယားကို ဘေးတိုက် scroll။
- **Font** (`fonts/`, offline cache ထဲပါ): စာသား/ဇယား = **Padauk** (SIL OFL, Regular+Bold woff2, `@fontsource/padauk` ကနေ)၊
  ခေါင်းစဉ်/card = **Akkhayar Robo** (ဆိုင်ရှင်ပေးတဲ့ font၊ "Free to use")။ Akkhayar ကို `unicode-range: U+1000-109F`
  (မြန်မာစာသာ) ကန့်ထားတယ် — သူ့ ဂဏန်း "2" က "Z" နဲ့ ဆင်လို့ ဂဏန်း/English က Padauk နဲ့ပြတယ်။
  ဆိုင်ရှင်ပေးတဲ့ တခြား font (Burma-009/019, BM-King002, Z09-LatYaySat, PT16_Burmese) တွေ repo ထဲ မထည့်ထား
  (BM-King002 က စာလုံးကွဲတယ်)။ Font အသစ်က **Unicode** ဖြစ်ရမယ် (Zawgyi မရ)။
- **ဘောင်ချာ** (ဆိုင်ရှင်ပေးတဲ့ ဘောင်ချာ အစစ် နမူနာအတိုင်း — `voucherHTML()`):
  - အပေါ်ပိုင်း (ဖောက်သည်အတွက်): Logo + ဆိုင်အမည် + ဖုန်း → လိပ်စာ (အလယ်) → Customer/Contact | Date/Vr.No →
    ဇယား (ဖုန်းအမျိုးအစား | အကြောင်းအရာ | ခန့်မှန်းကုန်ကျငွေ) → မှတ်ချက် (default: "တစ်လကျော်သည့် ဖုန်းများကို တာဝန်မယူပါ။" — ဆိုင်ရှင်ရွေးထား) → **Barcode (Code128) + QR** (Vr No.)
  - အောက်ပိုင်း ✂ **Service Information** ဖြတ်ပိုင်း (ဆိုင်က ဖုန်းနဲ့တွဲထားဖို့): Vr.No၊ အမျိုးအစား၊ အကြောင်းအရာ၊ IMEI၊ ဆရာ | Date၊ Customer၊ Contact၊ ခန့်မှန်း
  - ငွေရှင်း ဘောင်ချာ (ထုတ်ယူပြီး): ကျသင့်ငွေ၊ စရံ၊ ပေးရန်ကျန် **သာ** — ပစ္စည်းဖိုး/အမြတ် ဖောက်သည်ကို ဘယ်တော့မှ မပြရ
  - ဆက်တင်: Logo upload (240px ချုံ့၊ data URL)၊ စက္ကူ **A5** (ဆိုင်ရှင် အတည်ပြုပြီး၊ default) / A4 / 80mm၊ ဖြတ်ပိုင်း ပါ/မပါ၊ နမူနာ print
  - Default logo `icons/voucher-logo.svg` (အဖြူအမည်း line-art — အပြာ icon က B&W printer မှာ မည်းထွက်လို့)
  - Barcode: `code128Svg()` ကိုယ်တိုင်ရေး (Code 128-B)။ QR: `vendor/qrcode.js` (qrcode-generator 2.0.4, MIT)။
    zxing-cpp နဲ့ decode စစ်ပြီး။ Barcode scanner နဲ့ ဖတ်ရင် Search (Vr No.) ထဲ ရိုက်ထည့်ပေးလို့ ရှာလို့ရ။
- **Print**: `#printArea` + `@media print`၊ `@page size` ကို စက္ကူအလိုက် `doPrint()` က ထည့်တယ်။ ပုံ load ပြီးမှ print။
- **PWA (installable app)**: `manifest.webmanifest`၊ `sw.js` (network-first + offline cache)၊ `icons/`၊
  `navigator.storage.persist()`။
- **Hosting**: PWA install/offline က HTTPS ပေါ်မှာမှ ရတယ်။ **Cloudflare Pages** (sync ပါ — အဓိက) / GitHub Pages (sync မပါ)။
  ⚠️ link မတူရင် localStorage မတူ — GitHub Pages ကထည့်ထားတဲ့ data ကို Backup → Restore နဲ့ ရွှေ့ရ။

## Code စည်းမျဉ်း
- Data schema ပြောင်းရင် key version (`_v2` → `_v3`) တိုးပြီး migration function ထည့်ပါ။
- localStorage ဖတ်/ရေးတာ အားလုံးကို `try/catch` ဖြင့် ကာကွယ်ပါ။
- User ထည့်တဲ့ စာသားကို HTML ထဲ ထည့်တဲ့အခါ escape လုပ်ပါ (`esc()` helper)။
- ယနေ့ရက်စွဲကို local time နဲ့ ယူပါ (`today()`) — `toISOString()` တိုက်ရိုက်မသုံးရ (UTC ဖြစ်သွားတယ်)။
- CLAUDE.md ကို feature အသစ်ထည့်တိုင်း update လုပ်ပါ။
- App ဖိုင် ပြင်တိုင်း `sw.js` ထဲက `VERSION` ကို တိုးပါ။ ဖိုင်အသစ်ထည့်ရင် `FILES` list ထဲလည်း ထည့်ပါ။
- Icon ပြောင်းရင် `icons/icon.svg` ကို ပြင်ပြီး PNG တွေကို ပြန် generate လုပ်ပါ။

## ဖွင့်သုံးနည်း
- **စမ်းကြည့်ရုံ**: `index.html` ကို browser ဖြင့် ဖွင့်ပါ (offline/install မပါ)။
- **Local မှာ PWA စမ်းရန်**: `python3 -m http.server 8000` → `http://localhost:8000`
- **Install လုပ်နည်း** (HTTPS link ပေါ်တင်ပြီးမှ):
  - Android (Chrome): "⬇ Install" ခလုတ် (သို့) menu ⋮ → Install app
  - iPhone (Safari): Share ⬆ → Add to Home Screen
  - Windows (Chrome/Edge): ခလုတ် (သို့) address bar ထဲက install icon
- iPhone မှာ install လုပ်ထားတဲ့ app ရဲ့ data က Safari ထဲက data နဲ့ သီးခြားဖြစ်တယ်။

## စက်များကြား Sync (Cloudflare Pages Functions + D1)
ဆိုင်ရှင် တောင်းဆိုချက် — ဖုန်းမှာထည့်တာ laptop မှာပါ ပေါ်ရမယ်။ **Offline-first**: စက်တိုင်း localStorage မှာ ဆက်သိမ်း၊
လိုင်းရရင် server နဲ့ ပို့/ယူ။

- **Server**: `functions/api/[[path]].js` (Cloudflare Pages Function)
  - `GET /api/ping` (password စစ်)၊ `POST /api/sync` (push + pull)၊ `POST /api/vr` (Vr No. ခွဲပေး)
  - Auth: header `x-shop-key` == secret `SHOP_PASSWORD` (constant-time compare)
  - D1 binding `DB` — table `records(kind, id, data, updated_at, deleted, rev)`၊ `meta(k, v)` (ပထမ request မှာ အလိုအလျောက်ဆောက်)
  - **Last-write-wins**: `updated_at` ပိုနောက်ကျမှ အစားထိုး။ `rev` (server က အစဉ်လိုက်) နဲ့ "since" pull
  - Request တစ်ခု ≤40 changes၊ pull ≤1000 rows (`more` flag) — D1 free-tier query limit အောက်မှာနေအောင်
- **Client** (`index.html` "Cloud Sync" အပိုင်း, localStorage key `phoneServiceSync_v1`):
  - ပြောင်းသွားတာကို **hash နဲ့ ရှာ** (`trackChanges()` — `save()` တိုင်း) → mutation code တွေ ပြင်စရာမလို
    (record တိုင်းရဲ့ FNV hash ကို မှတ်၊ မတူရင် `updatedAt` သတ်မှတ်ပြီး `pending`၊ ပျောက်သွားရင် delete tombstone)
  - Sync ချိန်: save ပြီး 0.8s၊ app ဖွင့်တာ၊ online ပြန်ဖြစ်တာ၊ tab ပြန်မြင်တာ၊ ၃၀ စက္ကန့်တိုင်း
  - Sync ဖြစ်တဲ့ record: jobs / expenses / parts / settings (logo ပါ)။ **မဖြစ်တာ**: စာလုံးအရွယ် (စက်အလိုက်)၊ `nextVr`၊ `lastBackup`
  - **Vr No.**: online → server `meta.vr` counter (စက်တွေကြား မထပ်)၊ offline → `nextVr` + စက်အက္ခရာ (ဥပမာ `1004S`)
  - ချိတ်တဲ့အခါ ဒီစက်မှာ data ရှိရင် "Cloud ထဲ ထည့်ပေါင်း / ဖျက်ပြီး Cloud ကပဲယူ" မေးတယ်
  - Topbar pill က Sync အခြေအနေ ပြ (နှိပ်ရင် ဆက်တင်)
  - GitHub Pages ပေါ်မှာ `/api` မရှိ → "ဒီ link မှာ Sync မရ" (app ကတော့ ပုံမှန်အလုပ်လုပ်)
  - `sw.js` က `/api/` ကို cache မလုပ်
- **Local စမ်းနည်း**: `npx wrangler pages dev . --d1 DB=shopdb --binding SHOP_PASSWORD=test --persist-to <tmp>`
  (repo root ကနေ run မှ `functions/` ကိုတွေ့)။ စက် ၂ လုံး e2e (merge, Vr, offline, delete, conflict) စမ်းပြီး။
- **Cloudflare setup** (ဆိုင်ရှင် dashboard မှာ): Pages project ← GitHub `main`၊ build command မရှိ၊ output `/`၊
  Bindings → D1 `DB`၊ Variables and Secrets → Secret `SHOP_PASSWORD`၊ ပြီးရင် redeploy။

## မေးရန် ကျန်သေးတာ (ဆိုင်ရှင်ထံ)
- လက်ရှိ program ရဲ့ data အဟောင်းကို Excel ကနေ import လုပ်ဖို့ လိုမလို

## နောင်လုပ်မယ့် အစီအစဉ် (Roadmap)
- [x] PWA — icon၊ install၊ offline
- [x] လက်ရှိ program ရဲ့ screen ၆ ခု ပုံစံ (v2)
- [x] ဘောင်ချာ print (လက်ခံ / ထုတ်ယူ)
- [x] ဘောင်ချာ ပုံစံကို ဆိုင်ရဲ့ အစစ်အတိုင်း ညှိ (barcode + QR + ဖြတ်ပိုင်း)
- [ ] လက်ရှိ program ရဲ့ Excel data import
- [ ] လဲထည့်တဲ့ပစ္စည်းကို stock ထဲက အလိုအလျောက် နုတ်ခြင်း
- [ ] အာမခံ (warranty) ရက် ခြေရာခံခြင်း
- [x] GitHub Pages ပေါ် deploy (`https://chanelwal73.github.io/Phone-Service/`, `main` branch)
- [x] စက်များကြား data sync (ဖုန်း ↔ laptop) — Cloudflare Pages Functions + D1, offline-first (code ပြီး)
- [ ] Cloudflare Pages ပေါ် deploy + D1/Secret setup (ဆိုင်ရှင် dashboard မှာ)
