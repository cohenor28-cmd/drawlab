/* DrawLab Service Worker
   גרסה זו מאפשרת עבודה אופליין ומבטיחה שעדכונים מ-Claude יופיעו מיד.
   כל פעם שמעלים גרסה חדשה — יש לשנות את CACHE_NAME (למשל v2, v3...).
*/
const CACHE_NAME = 'drawlab-ai-backtest-v41';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './data/I1_0910.csv',
  './data/I1_1011.csv',
  './data/I1_1112.csv',
  './data/I1_1213.csv',
  './data/I1_1314.csv'
];

/* התקנה: שמור את כל הנכסים במטמון */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  /* הפעל מיד בלי להמתין לסגירת הטאב הישן */
  self.skipWaiting();
});

/* הפעלה: מחק מטמונים ישנים */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* אסטרטגיה: Network-first — תמיד מנסה לטעון מהרשת תחילה (= עדכונים מיידיים),
   ואם אין רשת — חוזר למטמון (= עובד אופליין). */
self.addEventListener('fetch', event => {
  /* טפל רק בבקשות GET לאותו מקור */
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        /* עדכן את המטמון בגרסה החדשה */
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
