// sw.js
const assets = ["/index.html"]

let cache_name = "SimiCart"; // The string used to identify our cache
self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});

self.addEventListener("fetch", event => {
    if (event.request.url === "http://localhost:5000/") {
        // or whatever your app's URL is
        event.respondWith(
            fetch(event.request).catch(err =>{
                console.log('getting cache')
                self.cache.open(cache_name).then(cache => cache.match("/index.html"))
            }
            )
        );
    } else {
        event.respondWith(
            fetch(event.request).catch(err =>
                caches.match(event.request).then(response => response)
            )
        );
    }
});