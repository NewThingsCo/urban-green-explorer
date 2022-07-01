import { clientsClaim } from 'workbox-core';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
/**
 * Custom Service Worker for Vite Plugin PWA
 * @link https://vite-plugin-pwa.netlify.app/guide/inject-manifest.html#custom-service-worker
 */
declare let self: ServiceWorkerGlobalScope;

cleanupOutdatedCaches();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('message', (event) => {
  if (event.data && 'SKIP_WAITING' === event.data.type) {
    console.log('SKIP_WAITING is here');
    self.skipWaiting();
  }
});
