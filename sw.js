// Offline cache. ဖိုင်တစ်ခုခု ပြင်တိုင်း VERSION ကို တိုးပါ (ဒါမှ ဖုန်းတွေမှာ update ရမယ်)
const VERSION = 'v11';
const CACHE = 'phone-service-' + VERSION;
const FILES = ['./', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png',
  './fonts/padauk-myanmar-400.woff2', './fonts/padauk-myanmar-700.woff2', './fonts/padauk-latin-400.woff2',
  './fonts/padauk-latin-700.woff2', './fonts/akkhayar-robo.woff2', './vendor/qrcode.js', './icons/icon.svg', './icons/voucher-logo.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Network first (update အသစ်ရအောင်)၊ internet မရှိရင် cache ကနေ ပြမယ်
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  if (new URL(e.request.url).pathname.includes('/api/')) return;   // Sync API ကို cache မလုပ်
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
