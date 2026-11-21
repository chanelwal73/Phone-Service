# CLAUDE.md — Phone-Service

## ပရောဂျက် ရည်ရွယ်ချက်
ဖုန်းပြင်ဆိုင်တစ်ဆိုင်အတွက် **စာရင်းဇယား ထိန်းသိမ်းတဲ့ tool**။
ဆိုင်ရှင်/ဝန်ထမ်းက ကွန်ပျူတာ (သို့) ဖုန်းကနေ internet မလိုဘဲ အလွယ်တကူ သုံးနိုင်ရမယ်။

## အဓိက လုပ်ဆောင်ချက်များ
1. **ပြင်ဆင်မှု စာရင်း (Repair Jobs)** — ဖောက်သည်အမည်၊ ဖုန်းနံပါတ်၊ ဖုန်းမော်ဒယ်၊ ပြဿနာ၊
   ကျသင့်ငွေ၊ စရံငွေ၊ အခြေအနေ (လက်ခံပြီး → ပြင်နေဆဲ → ပြီးပြီ → ပေးအပ်ပြီး)၊ ရက်စွဲ
2. **ပစ္စည်းစာရင်း (Parts Inventory)** — အပိုပစ္စည်းအမည်၊ အရေအတွက်၊ ဝယ်ဈေး၊ ရောင်းဈေး၊
   လက်ကျန်နည်းရင် သတိပေးချက်
3. **ငွေစာရင်း အနှစ်ချုပ် (Summary)** — ယနေ့/ယခုလ ဝင်ငွေ၊ ပြီးစီး/မပြီးသေး job အရေအတွက်၊
   လက်ကျန်နည်း ပစ္စည်းများ
4. **Backup / Export** — JSON ဖြင့် backup/restore၊ CSV (Excel ဖွင့်နိုင်) export

## နည်းပညာ ဆုံးဖြတ်ချက်များ
- **Single-file web app**: `index.html` တစ်ဖိုင်တည်း (HTML + CSS + vanilla JS)။ build step မရှိ၊
  server မလို၊ browser မှာ double-click ဖွင့်ရုံပဲ။
- **Data သိမ်းပုံ**: browser `localStorage` (key: `phoneServiceData_v1`)။ data ပျောက်မှာစိုးရင်
  JSON backup ကို ပုံမှန် download လုပ်ထားဖို့ UI မှာ သတိပေးထားရမယ်။
- **External library မသုံး** (offline အလုပ်လုပ်ရမယ်)။
- **UI ဘာသာစကား**: မြန်မာဘာသာ။ ငွေကြေး = ကျပ် (Ks)၊ ဂဏန်းကို ထောင်ဂဏန်း comma ခြားပြမယ်။
- **Mobile-first** responsive layout။

## Code စည်းမျဉ်း
- Data schema ပြောင်းရင် key version (`_v1` → `_v2`) တိုးပြီး migration function ထည့်ပါ။
- localStorage ဖတ်/ရေးတာ အားလုံးကို `try/catch` ဖြင့် ကာကွယ်ပါ။
- User ထည့်တဲ့ စာသားကို HTML ထဲ ထည့်တဲ့အခါ escape လုပ်ပါ (`esc()` helper)။
- CLAUDE.md ကို feature အသစ်ထည့်တိုင်း update လုပ်ပါ။

## ဖွင့်သုံးနည်း
`index.html` ကို Chrome / Edge / Safari ဖြင့် ဖွင့်ပါ။

## နောင်လုပ်မယ့် အစီအစဉ် (Roadmap)
- [ ] ဘောင်ချာ (receipt) print ထုတ်ခြင်း
- [ ] Job မှာ သုံးတဲ့ အပိုပစ္စည်းကို stock ထဲက အလိုအလျောက် နုတ်ခြင်း
- [ ] အာမခံ (warranty) ရက် ခြေရာခံခြင်း
- [ ] ရောင်းချမှု (ဖုန်း/accessory အရောင်း) စာရင်း
