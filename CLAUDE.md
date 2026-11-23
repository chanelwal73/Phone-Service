# CLAUDE.md — Phone-Service

## ပရောဂျက် ရည်ရွယ်ချက်
ဖုန်းပြင်ဆိုင်တစ်ဆိုင်အတွက် **စာရင်းဇယား ထိန်းသိမ်းတဲ့ tool**။
ဆိုင်က လက်ရှိသုံးနေတဲ့ desktop program ("Mobile Phone Service Management System") ကို **အစားထိုးဖို့** —
ပုံစံ/လုပ်ငန်းစဉ်ကို အတူတူထားပြီး ဖုန်းကနေပါ သုံးလို့ရ၊ install လုပ်လို့ရ၊ offline သုံးလို့ရအောင် လုပ်တာ။

(⚠️ ဖောက်သည် အမည်/ဖုန်းနံပါတ် လို data အစစ်တွေကို repo ထဲ ဘယ်တော့မှ မထည့်ရ — repo က public ဖြစ်နိုင်တယ်)

## 🔖 လက်ရှိအခြေအနေ / နောက်တစ်ခါ ဆက်လုပ်ရန် (Handoff — 2026-11-23)
> Session အသစ် (ဘယ် Claude account ကဖြစ်ဖြစ်) စရင် **ဒီအပိုင်းကို အရင်ဖတ်ပါ**။ ဆိုင်ရှင်နဲ့ မြန်မာလို ပြောပါ။

**ပြီးသွားတာ (အကုန် `main` ထဲမှာ — PR #1–#10 merge ပြီး)**
- App အပြည့်အစုံ: screen ၆ ခု + ပစ္စည်းလက်ကျန် + ဆက်တင်၊ ပြုပြင်ဆဲ → ပြုပြင်ပြီး → ထုတ်ပြီး workflow၊ A5 ဘောင်ချာ
  (barcode/QR/ဖြတ်ပိုင်း)၊ မြန်မာ font၊ Lucide icon design၊ PWA install + offline၊ Update bar၊ စာလုံးအရွယ် ဆက်တင်
- Cloudflare Sync (Pages Functions + D1) — ဖုန်း + laptop ချိတ်ပြီး Sync ✓ အလုပ်လုပ်ကြောင်း ဆိုင်ရှင် အတည်ပြုပြီး
- Live: **`https://pk-mobile.pages.dev`** (Cloudflare account "A"၊ project `pk-mobile`၊ `main` push → auto deploy)

**⚠️ လက်ရှိ ပြဿနာ — မြန်မာ ISP က `*.pages.dev` ကို ပိတ်ထား**
- VPN ချိတ်မှ `pk-mobile.pages.dev` ဝင်လို့ရ။ `chanelwal73.github.io/Phone-Service/` က VPN မပါဘဲ ရ (ဆိုင်ရှင် စစ်ပြီး)
- github.io မှာ Sync မရ (`/api` မရှိ) → ဆိုင်ရှင် စက်နှစ်လုံး မျှသုံးချင်လို့ **custom domain လို**

**👉 နောက်တစ်ဆင့် (ဆိုင်ရှင် "နောက်ရက်မှ လုပ်မယ်" လို့ ပြောထား) — Custom subdomain ချိတ်ရန်**
- ဆိုင်ရှင်မှာ domain ရှိပြီးသား — **Cloudflare account "B"** (တခြားဖုန်းမှာ သုံးနေတဲ့ account၊ တခြား project အတွက်)
- Code ပြင်စရာ **မလို** (API က relative path `api/…`)။ Dashboard မှာပဲ လုပ်ရ:
  1. Account A → Workers & Pages → `pk-mobile` → **Custom domains → Set up a custom domain** → `shop.<domain>` (နာမည် ဆိုင်ရှင်ရွေး)
  2. Account B → domain → DNS → **Add record**: `CNAME` · Name `shop` · Target `pk-mobile.pages.dev` · Proxied
     (လက်ရှိ record တွေ မထိရ — တခြား project ရှိလို့)
  3. Account A မှာ Active ✅ ဖြစ်အောင်စောင့် → **VPN ပိတ်ပြီး** subdomain နဲ့ စမ်း
  4. Error 1014 (CNAME Cross-User Banned) ပေါ်ရင် → record ကို **DNS only (grey cloud)** ပြောင်း
- အောင်မြင်ပြီးရင်:
  - ဖုန်း/laptop မှာ **link အသစ်နဲ့ app ပြန် install + Sync password ပြန်ထည့်** (origin မတူ → localStorage မတူ၊ data က cloud ကပြန်ရ)
  - pages.dev app မှာ sync မဖြစ်သေးတာ (pill မှာ "(N)") ရှိရင် VPN ဖွင့်ပြီး "ယခု Sync" အရင်နှိပ်ခိုင်း
  - ဒီဖိုင်ရဲ့ Hosting / Roadmap မှာ link အသစ် မှတ်ပါ
- ⚠️ ဆိုင် password (`SHOP_PASSWORD`) ကို ဘယ်တော့မှ chat/repo ထဲ မမေး၊ မရေး

**ကျန်သေးတဲ့ အကြံပြုချက်များ (ဆိုင်ရှင် မတောင်းဆိုရသေး)**
- ပရိုဂရမ်အဟောင်းရဲ့ Excel data import · လဲထည့်ပစ္စည်း stock အလိုအလျောက်နုတ် · အာမခံရက် ခြေရာခံ

**Dev workflow**
- Branch `claude/phone-repair-inventory-tool-tpetc0` (သို့ session က ပေးတဲ့ branch) → commit → PR → ဆိုင်ရှင် merge
- Merge ပြီးတိုင်း branch ကို `main` နဲ့ fast-forward လုပ်ပါ (force-push မလုပ်)
- Code ပြင်တိုင်း `sw.js` VERSION တိုး (လက်ရှိ **v17**) — မတိုးရင် ဆိုင်ရှင်စက်မှာ Update bar မပေါ်
- စမ်းနည်း: Playwright (headless Chromium) + `python3 -m http.server`၊ sync ကို `wrangler pages dev` (အောက်မှာကြည့်)

## လုပ်ငန်းစဉ် (Workflow)
```
ဖုန်းလက်ခံ (+ အသစ်ထည့်) → [လက်ခံစာရင်း / ပြုပြင်ဆဲ]  --▶ ပစ္စည်းဖိုးထည့်-->  [ပြုပြင်ပြီးစာရင်း]
   🖨 လက်ခံဘောင်ချာ                                                   │ (မထုတ်ရသေး — ဆိုင်မှာရှိ)
                                                                       └─▶ ဖုန်းပြန်ထုတ်ပေး (ရက်ရွေး) → ထုတ်ပြီး
                                                                              ├→ [ဝင်ငွေစာရင်း] (ပစ္စည်းဖိုး + လက်ခ)
                                                                              └→ [အရှုံး/အမြတ်] (ထုတ်ရက်အလိုက်)
[ပျက်စီးဆုံးရှုံးမှုစာရင်း] (ပြင်ရင်း ပျက်သွားတာ)   [ဆိုင်အသုံးစရိတ်စာရင်း] (သီးခြား ထည့်)
```

## Screen များ (လက်ရှိ program အတိုင်း)
**Home** — tile ၆ ခု (+ ငါတို့က ထပ်ထည့်တဲ့ ပစ္စည်းလက်ကျန်၊ ဆက်တင်)

1. **ဖုန်းပြင်လက်ခံစာရင်း** — ပြင်ဖို့ လက်ခံထားဆဲ ဖုန်းများ
   - Column: Vr No.၊ အမည်၊ ဖုန်းနံပါတ်၊ ဖုန်းအမျိုးအစား၊ IMEI၊ အကြောင်းအရာ၊ Service ဆရာ၊ ခန့်မှန်းကုန်ကျငွေ၊ ဖုန်းအပ်သည့်ရက်
   - Actions: Print (လက်ခံဘောင်ချာ)၊ ✔ ပြုပြင်ပြီးစာရင်းသို့ ပြောင်းရန်၊ ပြင်၊ ဖျက်
2. **ပြုပြင်ပြီးစာရင်း** (`repaired` + `done`)
   - Card: ဝင်ငွေ / ပစ္စည်းဖိုး / လက်ခ / ပျက်စီးမှု စုစုပေါင်း + **ထုတ်ရန်ကျန် N လုံး (ယူရမည့်ငွေ)**
   - Filter: အားလုံး / ထုတ်ရန်ကျန် / ထုတ်ပြီး
   - Column: Vr No.၊ အမည်၊ ဖုန်း၊ အမျိုးအစား၊ IMEI၊ ပြုပြင်သည့်အကြောင်းအရာ၊ ပစ္စည်းဖိုး၊ လက်ခ၊ စုစုပေါင်း၊ ပျက်စီးမှု၊
     Service ဆရာ၊ ဖုန်းအပ်သည့်ရက်၊ ဖုန်းထုတ်ယူသည့်ရက် (မထုတ်ရသေး tag)၊ ပြုပြင်မှုအခြေအနေ
   - Actions: Print၊ ဖုန်းပြန်ထုတ်ပေးရန် (repaired မှ)၊ ပစ္စည်းဖိုး/လက်ခ ပြင်၊ ⋮ menu၊ ပြင်၊ ဖျက်
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
           note,                                   // မှတ်ချက်
           status: 'open' | 'repaired' | 'done',  // ပြုပြင်ဆဲ → ပြုပြင်ပြီး (ဆိုင်မှာရှိ) → ထုတ်ပြီး
           // status ≠ 'open' ဖြစ်မှ
           result: 'success' | 'fail', repairedDate, partName, partFee, serviceFee,
           pickupDate,                             // status = 'done' ဖြစ်မှ (ထုတ်ပေးသည့်ရက်)
           damage: { part, value, qty } | null }],
  expenses: [{ id, date, desc, amount }],
  parts: [{ id, name, qty, min, buy, sell }] }
```
- ဝင်ငွေ (စုစုပေါင်း) = `partFee + serviceFee`။ ပျက်စီးမှုငွေ = `damage.value × damage.qty`
- **▶ ထုတ်ယူ dialog** (ဆိုင်ရှင် တောင်းဆိုချက်): ဖုန်းအပ်တုန်းက ထည့်ထားတာတွေ ထပ်ရိုက်စရာမလိုရ —
  `ကျသင့်ငွေ` = `estimate` (ဖောက်သည်ဆီ တောင်းထားတဲ့ဈေး)၊ `partName` = `problem` ကို အလိုအလျောက်ဖြည့်၊
  cursor က ပစ္စည်းဖိုးမှာ။ ပစ္စည်းဖိုး ရိုက်တာနဲ့ **အမြတ် (လက်ခ) = ကျသင့်ငွေ − ပစ္စည်းဖိုး** ကို ဘေးမှာ ချက်ချင်းပြ။
  သိမ်းရင် `serviceFee = charge − partFee` (ဥပမာ 40,000 တောင်း၊ ပစ္စည်းဖိုး 20,000 → အမြတ် 20,000)။
- **အဆင့် ၃ ဆင့်** (ပရိုဂရမ်အဟောင်းအတိုင်း — ဆိုင်က **လကုန်မှ** စာရင်းချုပ်တယ်):
  1. လက်ခံစာရင်း ▶ "ပြုပြင်ပြီးစာရင်းသို့ ပြောင်းရန်" → ပစ္စည်းဖိုး ထည့် → `repaired` (`repairedDate` = ယနေ့)
     (dialog ထဲ "ဖောက်သည် ဖုန်းယူသွားပြီ" အမှန်ခြစ်ရင် ရက်ရွေးပြီး တန်း `done`)
  2. ပြုပြင်ပြီးစာရင်း — ငွေနဲ့ ဖုန်းအလုံးရေ တိုက်စစ် (filter: အားလုံး / ထုတ်ရန်ကျန် / ထုတ်ပြီး၊ card "ထုတ်ရန်ကျန် N လုံး")
     → ▶ "ဖုန်းပြန်ထုတ်ပေးရန်" → **ထုတ်ပေးသည့်ရက် ရွေး** (နောက်ဆုံးရွေးတဲ့ ရက်ဟောင်းကို မှတ်ထား) → `done`
  3. ⚙ menu: "ထုတ်ပြီးသားစာရင်းမှ ပယ်ဖျက်ရန်" (done → repaired) / "ပြုပြင်ဆဲစာရင်းသို့ ပြောင်းရန်" (→ open)
- **ဝင်ငွေ/အရှုံးအမြတ်** = `done` (ထုတ်ပြီး) သာ၊ **ထုတ်ယူရက် (`pickupDate`)** နဲ့ တွက်။ ပြုပြင်ပြီး/ပျက်စီးမှု list က `repaired` + `done`
- `repaired` ဘောင်ချာ print = ငွေရှင်းဘောင်ချာ (ရက် = ယနေ့)
- ⚠️ `status: 'repaired'` က အသစ်ထည့်တဲ့ တန်ဖိုး (data key မပြောင်း — data ဟောင်း အကုန် valid)။ app ဟောင်းကို update မလုပ်ရသေးတဲ့ စက်က
  `repaired` ကို မမြင်ရ → Update bar နဲ့ update ခိုင်းပါ
- Vr No. = `nextVr` ကနေ အစဉ်လိုက် (1001, 1002, ...) — Sync ချိတ်ထားရင် server counter က ခွဲပေး (Sync အပိုင်းကြည့်)
- `_v1` data ရှိရင် အလိုအလျောက် v2 ကို migrate လုပ်တယ် (`migrateV1`)

## နည်းပညာ ဆုံးဖြတ်ချက်များ
- **Single-file web app**: `index.html` တစ်ဖိုင်တည်း (HTML + CSS + vanilla JS)။ build step မရှိ။
- Screen ပြောင်းတာ hash routing (`#received`, `#completed`, `#income`, `#expenses`, `#damaged`,
  `#profit`, `#parts`, `#settings`)။ List screen ၆ ခုက `VIEWS` config တစ်ခုတည်းကနေ render လုပ်တယ်။
- **CDN/external library မသုံး** (offline အလုပ်လုပ်ရမယ်) — လိုရင် repo ထဲ vendor လုပ် (`vendor/qrcode.js`၊ Lucide sprite)။
- **Design / Icons** (ဆိုင်ရှင် "icon/button အလန်းလေး" တောင်းဆိုချက်): emoji မသုံး — **Lucide icons** (lucide-static 1.70.0,
  ISC) ကို `index.html` ထိပ်က inline SVG sprite (`<symbol id="i-…">`) အဖြစ် ထည့်ထား (offline OK)။ JS: `svgI(name)`၊
  ဇယား action ခလုတ် `ib(name, title, fn)` — အရောင် `IB_COLOR` (printer=blue, circle-check-big=green, hand-coins=teal,
  coins=amber, ellipsis-vertical=slate, pencil=indigo, trash-2=red)။ Icon အသစ်လိုရင် lucide-static ကနေ symbol ထပ်ထည့်ပါ။
  Home tile တွေက `c-blue/green/teal/orange/rose/violet/amber/slate` gradient icon။ CSS "Design v2" block က အပေါ်က rule တွေကို override လုပ်တယ်။
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
  - အောက်ပိုင်း ✂ **Service Information** ဖြတ်ပိုင်း (ဆိုင်က ဖုန်းနဲ့တွဲထားဖို့): Vr.No၊ အမျိုးအစား၊ အကြောင်းအရာ၊ IMEI | Date၊ Customer၊ Contact၊ ခန့်မှန်း
    (**Service ဆရာ နာမည် ဘောင်ချာမှာ မထည့်ရ** — ဆိုင်ရှင် တောင်းဆိုချက်)
  - ငွေရှင်း ဘောင်ချာ (ထုတ်ယူပြီး): ကျသင့်ငွေ၊ စရံ၊ ပေးရန်ကျန် **သာ** — ပစ္စည်းဖိုး/အမြတ် ဖောက်သည်ကို ဘယ်တော့မှ မပြရ
  - ဆက်တင်: Logo upload (240px ချုံ့၊ data URL — **Home header card မှာလည်း ပြ**၊ home-screen app icon ကတော့ မပြောင်း)၊ စက္ကူ **A5** (ဆိုင်ရှင် အတည်ပြုပြီး၊ default) / A4 / 80mm၊ ဖြတ်ပိုင်း ပါ/မပါ၊ နမူနာ print
  - Default logo `icons/voucher-logo.svg` (အဖြူအမည်း line-art — အပြာ icon က B&W printer မှာ မည်းထွက်လို့)
  - Barcode: `code128Svg()` ကိုယ်တိုင်ရေး (Code 128-B)။ QR: `vendor/qrcode.js` (qrcode-generator 2.0.4, MIT)။
    zxing-cpp နဲ့ decode စစ်ပြီး။ Barcode scanner နဲ့ ဖတ်ရင် Search (Vr No.) ထဲ ရိုက်ထည့်ပေးလို့ ရှာလို့ရ။
- **Print**: `#printArea` + `@media print`၊ `@page size` ကို စက္ကူအလိုက် `doPrint()` က ထည့်တယ်။ ပုံ load ပြီးမှ print။
- **PWA (installable app)**: `manifest.webmanifest`၊ `sw.js` (network-first + offline cache)၊ `icons/`၊
  `navigator.storage.persist()`။
- **App Update bar** (ဆိုင်ရှင် တောင်းဆိုချက်): `sw.js` VERSION ပြောင်းပြီး deploy လုပ်ရင် SW အသစ်က **waiting** မှာ
  စောင့်နေ (auto `skipWaiting` မလုပ်) → app အပေါ်ဆုံး (topbar ထဲ) မှာ **အစိမ်းရောင် "🆕 App အသစ် ရပါပြီ — Update"** bar ပြ →
  နှိပ်ရင် `SKIP_WAITING` message → `controllerchange` မှာ reload။ Update စစ်ချိန်: app ဖွင့်တာ၊ tab ပြန်မြင်တာ၊ ၃၀ မိနစ်တိုင်း။
  ပထမဆုံး install မှာ bar မပြ။ ⚠️ ဒါကြောင့် **VERSION မတိုးရင် bar မပေါ်** (code စည်းမျဉ်း ကြည့်)။
- **Hosting**: PWA install/offline က HTTPS ပေါ်မှာမှ ရတယ်။ **Cloudflare Pages `https://pk-mobile.pages.dev`** (sync ပါ — ဆိုင်က သုံးတဲ့ အဓိက link) / GitHub Pages (sync မပါ — အဟောင်း)။
  ⚠️ link မတူရင် localStorage မတူ — GitHub Pages ကထည့်ထားတဲ့ data ကို Backup → Restore နဲ့ ရွှေ့ရ။

## Code စည်းမျဉ်း
- Data schema ပြောင်းရင် key version (`_v2` → `_v3`) တိုးပြီး migration function ထည့်ပါ။
- localStorage ဖတ်/ရေးတာ အားလုံးကို `try/catch` ဖြင့် ကာကွယ်ပါ။
- User ထည့်တဲ့ စာသားကို HTML ထဲ ထည့်တဲ့အခါ escape လုပ်ပါ (`esc()` helper)။
- ယနေ့ရက်စွဲကို local time နဲ့ ယူပါ (`today()`) — `toISOString()` တိုက်ရိုက်မသုံးရ (UTC ဖြစ်သွားတယ်)။
- CLAUDE.md ကို feature အသစ်ထည့်တိုင်း update လုပ်ပါ။
- App ဖိုင် ပြင်တိုင်း `sw.js` ထဲက `VERSION` ကို တိုးပါ။ ဖိုင်အသစ်ထည့်ရင် `FILES` list ထဲလည်း ထည့်ပါ။
- **App icon** = ဆိုင်ရှင်ပေးတဲ့ **Smile Mobile logo** (1254px PNG — repo ထဲ မူရင်းမထည့်၊ `icons/icon-512.png` ကို အကြီးဆုံးအဖြစ်သုံး)။
  ထုတ်ပုံ: logo ရဲ့ အမည်းရောင် ထောင့်တွေကို rounded-rect mask နဲ့ ဖောက်ထွင်း (transparent) → `icon-192/512.png`၊
  `apple-touch-icon.png` (180, အပြာနောက်ခံ — iOS က ထောင့်ဝိုင်းပေး)၊ `maskable-512.png` (အပြာနောက်ခံ #0846E1 ပေါ် 80% — Android safe zone)။
  Favicon = `icon-192.png`။ `icons/icon.svg` က icon အဟောင်း (မသုံးတော့)။ ⚠️ Icon ပြောင်းရင် ဖုန်းမှာ app ဖျက်ပြီး ပြန် install မှ ပြောင်း။

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
- [x] ပြုပြင်ပြီး ↔ ထုတ်ပြီး ခွဲခြား (လကုန်စာရင်းချုပ် workflow)၊ ⚙ menu၊ မှတ်ချက်၊ Actions column ညာဘက်ကပ်
- [ ] လက်ရှိ program ရဲ့ Excel data import
- [ ] လဲထည့်တဲ့ပစ္စည်းကို stock ထဲက အလိုအလျောက် နုတ်ခြင်း
- [ ] အာမခံ (warranty) ရက် ခြေရာခံခြင်း
- [x] GitHub Pages ပေါ် deploy (`https://chanelwal73.github.io/Phone-Service/`, `main` branch)
- [x] စက်များကြား data sync (ဖုန်း ↔ laptop) — Cloudflare Pages Functions + D1, offline-first (code ပြီး)
- [x] Cloudflare Pages ပေါ် deploy + D1/Secret setup — **`https://pk-mobile.pages.dev`** (project `pk-mobile`, `main` push တိုင်း auto deploy)၊ ဖုန်းမှာ Sync ✓ အတည်ပြုပြီး
