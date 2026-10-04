// Service Worker for SST Schedule App (Minecraft Edition)
const CACHE_NAME = 'sst-craft-v14';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './qrcode.min.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './favicon.png',
  './minecraft_bg.jpg'
];

let backgroundTimer = null;
let lastSchedulePayload = null;

// Install event: cache all core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching offline assets');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[SW] Cache pre-fill partial warning:', err);
      });
    })
  );
});

// Activate event: cleanup old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              console.log('[SW] Removing old cache:', key);
              return caches.delete(key);
            }
          })
        );
      })
    ])
  );
});

// Fetch event: Network-first for dynamic sheets & Supabase, Cache-first for local assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // If requesting Google Sheets or Supabase Auth API, try network first
  if (url.hostname.includes('google') || url.hostname.includes('sheets') || url.hostname.includes('supabase.co')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
    return;
  }

  // Local assets: Stale-while-revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

// Handle incoming messages from the frontend
self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data) return;

  if (data.type === 'UPDATE_NOTIFICATION') {
    lastSchedulePayload = data.payload;
    showOrUpdateStickyNotification(data.payload);
    startBackgroundTicker();
  } else if (data.type === 'CANCEL_NOTIFICATION') {
    stopBackgroundTicker();
    self.registration.getNotifications({ tag: 'sst-schedule-notification' }).then((notifications) => {
      notifications.forEach((n) => n.close());
    });
  } else if (data.type === 'FORCE_SYNC') {
    if (lastSchedulePayload) {
      showOrUpdateStickyNotification(lastSchedulePayload);
    }
  }
});

// Background heartbeat to keep sticky notification updated every minute
function startBackgroundTicker() {
  if (backgroundTimer) clearInterval(backgroundTimer);
  backgroundTimer = setInterval(() => {
    // Notify clients to calculate latest minute or decrement
    self.clients.matchAll().then((clients) => {
      if (clients && clients.length > 0) {
        clients.forEach((c) => c.postMessage({ type: 'TICK_REQUEST' }));
      } else if (lastSchedulePayload) {
        // Tab is closed, update countdown based on end time
        updateFromPayload(lastSchedulePayload);
      }
    });
  }, 60000);
}

function stopBackgroundTicker() {
  if (backgroundTimer) {
    clearInterval(backgroundTimer);
    backgroundTimer = null;
  }
}

function updateFromPayload(payload) {
  if (!payload) return;
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (payload.endMinutes && payload.endMinutes > currentMinutes) {
    const left = payload.endMinutes - currentMinutes;
    payload.body = `⏳ ${left}m left • Room: ${payload.location || 'N/A'}${payload.nextClass ? ` • Next: ${payload.nextClass}` : ''}`;
  } else if (payload.endMinutes && payload.endMinutes <= currentMinutes) {
    payload.title = '⛏️ Class Finished!';
    payload.body = payload.nextClass ? `Next up: ${payload.nextClass}` : 'Rest easy, Crafter!';
  }
  showOrUpdateStickyNotification(payload);
}

// Show or update the sticky notification
function showOrUpdateStickyNotification(payload) {
  if (!payload || !self.registration) return;

  const title = payload.title || '⛏️ SST Schedule Tracker';
  const options = {
    body: payload.body || 'Checking college schedule...',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: 'sst-schedule-notification',
    requireInteraction: true, // Keep notification sticky on screen!
    renotify: false, // Update silently without repetitive buzz
    silent: true,
    data: {
      url: './index.html',
      updatedAt: Date.now()
    }
  };

  self.registration.showNotification(title, options).catch((err) => {
    console.error('[SW] Notification error:', err);
  });
}

// Click on notification brings the student back to the app
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./index.html');
      }
    })
  );
});
