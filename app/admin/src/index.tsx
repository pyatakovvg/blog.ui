
import 'reflect-metadata';
import * as worker from './sw';
import(/* webpackChunkName: "bootstrap" */'./bootstrap');


(async () => {
  if ("serviceWorker" in navigator) {
    await worker.register({
      onUpdate(registration: ServiceWorkerRegistration) {
        if (registration.waiting) {
          registration.waiting.postMessage('SKIP_WAITING')
          console.debug('Service-worker был обновлен');
        }
      },
      onSuccess() {
        console.debug('Service-worker зарегистрирован');
      },
      onFail(error: Error) {
        console.log('Ошибка в работе service-worker', error);
      }
    });
  }
})();
