const cacheName = 'samjho-v1';
const staticAssets = [
  './',
  './index.html',
  './SAMJHO.mp4',
  './tap.png',
  './icon-192.png',
  './icon-512.png'
];

// Install the service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(staticAssets);
    })
  );
});

// Intercept requests to serve from cache if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});