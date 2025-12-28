const cacheName = 'samjho-v1';
const staticAssets = [
  './',
  './index.html',
  './SAMJHO.mp4',
  './tap.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', async el => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', el => {
  el.respondWith(
    caches.match(el.request).then(res => res || fetch(el.request))
  );
});