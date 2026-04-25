const CACHE = "pinpoint-v1";
const ASSETS = ["/", "/index.html", "./assets/pin-payphone.svg", "./assets/logo.ico"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});