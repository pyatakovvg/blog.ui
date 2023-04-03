
import { ExpirationPlugin } from 'workbox-expiration';
import { NetworkFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';


export default function() {

  registerRoute(
    ({ url, request }) => {
      console.log(request)
      return url.pathname.startsWith('/api/v1/')
    },
    new NetworkFirst({
      cacheName: 'api-v1',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin ({
          maxAgeSeconds: 24 * 60 * 60, // 1 день
        }),
      ],
    })
  );
}
