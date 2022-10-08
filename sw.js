self.addEventListener('install', () => {
    console.log('[Service Worker] Installing Service Worker');
    self.skipWaiting();
});

self.addEventListener('activate', () => {
    console.log('[Service Worker] Activating Service Worker');
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetch event...', event.request);
    event.respondWith(fetch(event.request.url));
});