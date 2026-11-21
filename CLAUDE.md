# CLAUDE.md — Phone-Service

## ပရောဂျက် ရည်ရွယ်ချက်
ဖုန်းပြင်ဆိုင်တစ်ဆိုင်အတွက် **စာရင်းဇယား ထိန်းသိမ်းတဲ့ tool**။
ဆိုင်ရှင်/ဝန်ထမ်းက ကွန်ပျူတာ (သို့) ဖုန်းကနေ app တစ်ခုလို install လုပ်ပြီး internet မလိုဘဲ အလွယ်တကူ သုံးနိုင်ရမယ်။

## အဓိက လုပ်ဆောင်ချက်များ
1. **ပြင်ဆင်မှု စာရင်း (Repair Jobs)** — ဖောက်သည်အမည်၊ ဖုန်းနံပါတ်၊ ဖုန်းမော်ဒယ်၊ ပြဿနာ၊
   ကျသင့်ငွေ၊ စရံငွေ၊ အခြေအနေ (လက်ခံပြီး → ပြင်နေဆဲ → ပြီးပြီ → ပေးအပ်ပြီး)၊ ရက်စွဲ
2. **ပစ္စည်းစာရင်း (Parts Inventory)** — အပိုပစ္စည်းအမည်၊ အရေအတွက်၊ ဝယ်ဈေး၊ ရောင်းဈေး၊
   လက်ကျန်နည်းရင် သတိပေးချက်
3. **ငွေစာရင်း အနှစ်ချုပ် (Summary)** — ယနေ့/ယခုလ ဝင်ငွေ၊ ပြီးစီး/မပြီးသေး job အရေအတွက်၊
   လက်ကျန်နည်း ပစ္စည်းများ
4. **Backup / Export** — JSON ဖြင့် backup/restore၊ CSV (Excel ဖွင့်နိုင်) export

## ဆိုင်က လက်ရှိသုံးနေတဲ့ စနစ် (Reference)
ဆိုင်ရှင်က ပြထားတဲ့ လက်ရှိ tool ရဲ့ screenshot ကနေ မှတ်ထားတာ။ ဒီ tool ကို အစားထိုးနိုင်အောင် လုပ်ဖို့ ရည်ရွယ်တယ်။
ကျန်တဲ့ screen တွေကို နောက်မှ ထပ်ပြမယ်။
(⚠️ ဖောက်သည် အမည်/ဖုန်းနံပါတ် လို data အစစ်တွေကို repo ထဲ မထည့်ရ)

**ဖုန်းလက်ခံစာရင်း screen**
- အပေါ်မှာ: ရက်စွဲ filter (dropdown + date picker)၊ "+ အသစ်ထည့်ရန်" ခလုတ်၊ "Export to Excel" ခလုတ်
- Column များ: ရက်စွဲ၊ အမည်၊ ဖုန်းနံပါတ်၊ ဖုန်းအမျိုးအစား၊ **IMEI No.**၊ အကြောင်းအရာ (ပြဿနာ)၊
  **Service ဆရာ** (ပြင်တဲ့ technician)၊ ခန့်မှန်းကုန်ကျငွေ၊ ဖုန်းအပ်သည့်ရက်
- Actions (တစ်ကြောင်းချင်း): 🖨 Print (ဘောင်ချာ)၊ ▶ (နောက်အဆင့်သို့? — အတည်ပြုရန်)၊ ✏️ ပြင်၊ ❌ ဖျက်
- Desktop (ကွန်ပျူတာ) မှာ ဇယားအကျယ်ကြီးနဲ့ သုံးနေတယ်

**ငါတို့ app မှာ မပါသေးတာ**: IMEI၊ Service ဆရာ၊ ရက်စွဲအလိုက် filter၊ row တစ်ခုချင်း Print။

## နည်းပညာ ဆုံးဖြတ်ချက်များ
- **Single-file web app**: `index.html` တစ်ဖိုင်တည်း (HTML + CSS + vanilla JS)။ build step မရှိ၊
  server မလို၊ browser မှာ double-click ဖွင့်ရုံပဲ။
- **Data သိမ်းပုံ**: browser `localStorage` (key: `phoneServiceData_v1`)။ data ပျောက်မှာစိုးရင်
  JSON backup ကို ပုံမှန် download လုပ်ထားဖို့ UI မှာ သတိပေးထားရမယ်။
- **External library မသုံး** (offline အလုပ်လုပ်ရမယ်)။
- **UI ဘာသာစကား**: မြန်မာဘာသာ။ ငွေကြေး = ကျပ် (Ks)၊ ဂဏန်းကို ထောင်ဂဏန်း comma ခြားပြမယ်။
- **Mobile-first** responsive layout။
- **PWA (installable app)**: ဖုန်း (Android/iPhone) နဲ့ Windows မှာ icon နဲ့ install လုပ်ပြီး
  သီးသန့် window နဲ့ ဖွင့်နိုင်ရမယ်။ Internet မရှိလည်း (offline) အလုပ်လုပ်ရမယ်။
  - `manifest.webmanifest` — app အမည်၊ icon၊ အရောင်
  - `sw.js` — service worker (network-first, offline ဆိုရင် cache ကနေ)
  - `icons/` — `icon.svg` (မူရင်း)၊ `icon-192.png`၊ `icon-512.png`၊ `maskable-512.png`၊ `apple-touch-icon.png`
  - `navigator.storage.persist()` ဖြင့် browser က data မဖျက်အောင် တောင်းဆိုထားတယ်
- **Hosting**: PWA install/offline က HTTPS ပေါ်မှာမှ အလုပ်လုပ်တယ် (`file://` နဲ့ မရ)။
  Static hosting (Cloudflare Pages ကို စဉ်းစားထား) ပေါ်တင်ရမယ်။

## Code စည်းမျဉ်း
- Data schema ပြောင်းရင် key version (`_v1` → `_v2`) တိုးပြီး migration function ထည့်ပါ။
- localStorage ဖတ်/ရေးတာ အားလုံးကို `try/catch` ဖြင့် ကာကွယ်ပါ။
- User ထည့်တဲ့ စာသားကို HTML ထဲ ထည့်တဲ့အခါ escape လုပ်ပါ (`esc()` helper)။
- CLAUDE.md ကို feature အသစ်ထည့်တိုင်း update လုပ်ပါ။
- App ဖိုင် (index.html, icon စသည်) ပြင်တိုင်း `sw.js` ထဲက `VERSION` ကို တိုးပါ။ ဖိုင်အသစ်ထည့်ရင်
  `FILES` list ထဲလည်း ထည့်ပါ။
- Icon ပြောင်းရင် `icons/icon.svg` ကို ပြင်ပြီး PNG တွေကို ပြန် generate လုပ်ပါ။

## ဖွင့်သုံးနည်း
- **စမ်းကြည့်ရုံ**: `index.html` ကို browser ဖြင့် ဖွင့်ပါ (offline/install မပါ)။
- **Local မှာ PWA စမ်းရန်**: `python3 -m http.server 8000` → `http://localhost:8000`
- **Install လုပ်နည်း** (HTTPS link ပေါ်တင်ပြီးမှ):
  - Android (Chrome): "⬇ App အဖြစ် Install" ခလုတ် (သို့) menu ⋮ → Install app
  - iPhone (Safari): Share ⬆ → Add to Home Screen
  - Windows (Chrome/Edge): ခလုတ် (သို့) address bar ထဲက install icon → Start menu/Desktop မှာ icon ရမယ်
- iPhone မှာ install လုပ်ထားတဲ့ app ရဲ့ data က Safari ထဲက data နဲ့ သီးခြားဖြစ်တယ်။

## နောင်လုပ်မယ့် အစီအစဉ် (Roadmap)
- [ ] ဘောင်ချာ (receipt) print ထုတ်ခြင်း
- [ ] Job မှာ သုံးတဲ့ အပိုပစ္စည်းကို stock ထဲက အလိုအလျောက် နုတ်ခြင်း
- [ ] အာမခံ (warranty) ရက် ခြေရာခံခြင်း
- [ ] ရောင်းချမှု (ဖုန်း/accessory အရောင်း) စာရင်း
- [ ] Cloudflare Pages ပေါ် deploy
- [ ] (ရွေးချယ်) Cloudflare D1 ဖြင့် စက်များကြား data sync (offline-first)
- [x] PWA — icon၊ install၊ offline
