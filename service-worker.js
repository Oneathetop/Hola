const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
