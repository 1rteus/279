const CACHE_NAME = "schedule-v3";
const STATIC_ASSETS = [
    "index.html",
    "admin.html",
    "style.css",
    "app.js",
    "firebase-config.js",
    "firebase-db.js",
    "manifest.json"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener("fetch", e => {
    var url = new URL(e.request.url);
    if (url.pathname.endsWith(".html") || url.pathname.endsWith("/") || url.pathname === "" ||
        url.hostname.includes("firebaseio.com") || url.hostname.includes("googleapis.com") || url.hostname.includes("gstatic.com")) {
        e.respondWith(fetch(e.request).then(function(r) {
            if (r.ok && url.hostname === location.hostname) {
                var clone = r.clone();
                caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
            }
            return r;
        }).catch(function() { return caches.match(e.request); }));
    } else {
        e.respondWith(caches.match(e.request).then(function(r) {
            return r || fetch(e.request).then(function(res) {
                if (res.ok) {
                    var cl = res.clone();
                    caches.open(CACHE_NAME).then(function(c) { c.put(e.request, cl); });
                }
                return res;
            });
        }));
    }
});
