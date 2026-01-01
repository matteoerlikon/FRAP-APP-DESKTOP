const CACHE_NAME = 'frap-v5';
const ASSETS = ['./', './index_pwa.html', './LOGO_FRAP.PNG', './manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });