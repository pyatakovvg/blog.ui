
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';


const CACHE_ENV_NAME = `env`;
const CACHE_FONTS_NAME = `fonts`;
const CACHE_IMAGES_NAME = `images`;
const CACHE_MANIFEST_NAME = `manifest`;


export default function() {

  registerRoute(
    ({ request }) => request.destination === 'font',
    new CacheFirst({
      cacheName: CACHE_FONTS_NAME,
      plugins: [
        new ExpirationPlugin ({
          maxEntries: 10,
          maxAgeSeconds: 180 * 24 * 60 * 60, // 180 дней
        }),
      ],
    })
  );

  registerRoute(
    ({ request }) => request.destination === 'image',
    new NetworkFirst({
      cacheName: CACHE_IMAGES_NAME,
      plugins: [
        new ExpirationPlugin ({
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 дней
        }),
      ],
    })
  );

  registerRoute(
    ({ url }) => url.pathname.match(/(manifest.json)/),
    new CacheFirst({
      cacheName: CACHE_MANIFEST_NAME,
      plugins: [
        new ExpirationPlugin ({
          maxEntries: 1,
          maxAgeSeconds: 24 * 60 * 60, // 1 дней
        }),
      ],
    })
  );

  registerRoute(
    ({ url }) => url.pathname.match(/(env.js)/),
    new CacheFirst({
      cacheName: CACHE_ENV_NAME,
      plugins: [
        new ExpirationPlugin ({
          maxEntries: 1,
          maxAgeSeconds: 24 * 60 * 60, // 7 дней
        }),
      ],
    })
  );
}
