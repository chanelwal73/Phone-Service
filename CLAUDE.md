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
- ပြုပြင်ပြီး/ဝင်ငွေ/ပျက်စီးမှု/အရှုံးအမြတ် အားလုံးက **ထုတ်ယူရက် (`pickupDate`)** နဲ့ တွက်တယ်
- Vr No. = `nextVr` ကနေ အစဉ်လိုက် (1001, 1002, ...)
- `_v1` data ရှိရင် အလိုအလျောက် v2 ကို migrate လုပ်တယ် (`migrateV1`)

## နည်းပညာ ဆုံးဖြတ်ချက်များ
- **Single-file web app**: `index.html` တစ်ဖိုင်တည်း (HTML + CSS + vanilla JS)။ build step မရှိ။
- Screen ပြောင်းတာ hash routing (`#received`, `#completed`, `#income`, `#expenses`, `#damaged`,
  `#profit`, `#parts`, `#settings`)။ List screen ၆ ခုက `VIEWS` config တစ်ခုတည်းကနေ render လုပ်တယ်။
- **External library မသုံး** (offline အလုပ်လုပ်ရမယ်)။
- **UI ဘာသာစကား**: မြန်မာဘာသာ။ ငွေ = ကျပ် (Ks)၊ comma ခြား။ ရက်စွဲပြပုံ `dd-mm-yyyy`။
- **Desktop + Mobile** — ဆိုင်မှာ monitor ကြီးနဲ့ ဇယားအကျယ်ကြီး သုံးတယ်၊ ဖုန်းမှာ ဇယားကို ဘေးတိုက် scroll။
- **Font** (`fonts/`, offline cache ထဲပါ): စာသား/ဇယား = **Padauk** (SIL OFL, Regular+Bold woff2, `@fontsource/padauk` ကနေ)၊
  ခေါင်းစဉ်/card = **Akkhayar Robo** (ဆိုင်ရှင်ပေးတဲ့ font၊ "Free to use")။ Akkhayar ကို `unicode-range: U+1000-109F`
  (မြန်မာစာသာ) ကန့်ထားတယ် — သူ့ ဂဏန်း "2" က "Z" နဲ့ ဆင်လို့ ဂဏန်း/English က Padauk နဲ့ပြတယ်။
  ဆိုင်ရှင်ပေးတဲ့ တခြား font (Burma-009/019, BM-King002, Z09-LatYaySat, PT16_Burmese) တွေ repo ထဲ မထည့်ထား
  (BM-King002 က စာလုံးကွဲတယ်)။ Font အသစ်က **Unicode** ဖြစ်ရမယ် (Zawgyi မရ)။
- **Print**: `#printArea` + `@media print`။ ဘောင်ချာ အကျယ် ~72mm (80mm receipt printer)။
- **PWA (installable app)**: `manifest.webmanifest`၊ `sw.js` (network-first + offline cache)၊ `icons/`၊
  `navigator.storage.persist()`။
- **Hosting**: PWA install/offline က HTTPS ပေါ်မှာမှ ရတယ်။ GitHub Pages (စမ်းရန်) / Cloudflare Pages။

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

## မေးရန် ကျန်သေးတာ (ဆိုင်ရှင်ထံ)
- ▶ ခလုတ်ရဲ့ အတိအကျ လုပ်ဆောင်ချက် (လောလောဆယ် "ပြင်ပြီး/ထုတ်ယူ" dialog လို့ ယူဆထား)
- ဘောင်ချာ ပုံစံ အစစ် (ဆိုင်အမည်၊ စည်းကမ်းချက်) နဲ့ printer အမျိုးအစား (58/80mm / A4)
- လက်ရှိ program ရဲ့ data အဟောင်းကို Excel ကနေ import လုပ်ဖို့ လိုမလို

## နောင်လုပ်မယ့် အစီအစဉ် (Roadmap)
- [x] PWA — icon၊ install၊ offline
- [x] လက်ရှိ program ရဲ့ screen ၆ ခု ပုံစံ (v2)
- [x] ဘောင်ချာ print (လက်ခံ / ထုတ်ယူ)
- [ ] ဘောင်ချာ ပုံစံကို ဆိုင်ရဲ့ အစစ်အတိုင်း ညှိ
- [ ] လက်ရှိ program ရဲ့ Excel data import
- [ ] လဲထည့်တဲ့ပစ္စည်းကို stock ထဲက အလိုအလျောက် နုတ်ခြင်း
- [ ] အာမခံ (warranty) ရက် ခြေရာခံခြင်း
- [ ] Cloudflare Pages ပေါ် deploy
- [ ] (ရွေးချယ်) Cloudflare D1 ဖြင့် စက်များကြား data sync (offline-first)
