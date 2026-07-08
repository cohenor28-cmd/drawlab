const CACHE_NAME='drawlab-v45-mobile-research-core';
const ASSETS=['./','./index.html','./manifest.json','./data/I1_0910.csv','./data/I1_1011.csv','./data/I1_1112.csv','./data/I1_1213.csv','./data/I1_1314.csv'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))) });
