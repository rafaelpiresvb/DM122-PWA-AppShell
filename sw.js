self.addEventListener('install', () => {
    console.log('[Service Worker] Installing Service Worker');
    self.skipWaiting();
});

self.addEventListener('activate', () => {
    console.log('[Service Worker] Activating Service Worker');
    return self.clients.claim();
});