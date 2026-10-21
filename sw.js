const CACHE='sales-tracker-v3.2.10-pwa-r7-west-is-best';
const CORE=['./','./index.html','./manifest.webmanifest','./sales-tracker-mobile-splash.jpg','./wib-icon-192-r7.png','./wib-icon-512-r7.png','./wib-icon-maskable-192-r7.png','./wib-icon-maskable-512-r7.png','./wib-apple-touch-icon-r7.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r}).catch(()=>caches.match(e.request).then(r=>r||(e.request.mode==='navigate'?caches.match('./index.html'):undefined))))});
