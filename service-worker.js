const CACHE = "reputasync-cache";

const urls = [

"/",
"index.html"

];

self.addEventListener("install", e=>{

e.waitUntil(

caches.open(CACHE)

.then(cache=>cache.addAll(urls))

);

});

self.addEventListener("fetch", e=>{

e.respondWith(

caches.match(e.request)

.then(response=>response || fetch(e.request))

);

});