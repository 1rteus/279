var CACHE_VERSION = "v2";
var CACHE_NAME = "schedule-" + CACHE_VERSION;

self.addEventListener("install", function(e) {
    self.skipWaiting();
});

self.addEventListener("activate", function(e) {
    e.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(
                keys.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

self.addEventListener("fetch", function(e) {
    e.respondWith(
        fetch(e.request).then(function(r) {
            if (r.ok && e.request.method === "GET") {
                var clone = r.clone();
                caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
            }
            return r;
        }).catch(function() {
            return caches.match(e.request);
        })
    );
});
