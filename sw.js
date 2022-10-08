const staticCache = 'appShell-v1';

const assetsToCache = ["offline.html"];

async function cacheStaticAssets() {
    const cache = await caches.open(staticCache);
    return cache.addAll(assetsToCache);
}

async function networkFirst(request) {
    try {
        return await fetch(request);
    } catch (error) {
        console.log("[Service Worker] network error", error);
        const cache = await caches.open(staticCache);
        return cache.match('offline.html');
    }
}

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing Service Worker');
    event.waitUntil(cacheStaticAssets());
    self.skipWaiting();
});

self.addEventListener('activate', () => {
    console.log('[Service Worker] Activating Service Worker');
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetch event...', event.request);
    event.respondWith(networkFirst(event.request));
});