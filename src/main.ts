/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import 'leaflet/dist/leaflet.css';
import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';
// @ts-ignore https://github.com/vueuse/schema-org/issues/20
import { installSchemaOrg } from '@vueuse/schema-org-vite/vite';
import { createHead } from '@vueuse/head';
import { router } from '@/router';
import App from '@/App';
import { i18n, pinia } from '@/utils';
import leaflet from '@/plugins/leaflet';
import { SCHEMA_ORG_USER_CONFIG } from '@/constants';

if ('undefined' !== typeof window) {
  registerSW({
    onOfflineReady() {
      console.info('Offline ready.');
    },
  });
}

const head = createHead();

const app = createApp(App)
  .use(i18n)
  .use(head)
  .use(leaflet)
  .use(pinia)
  .use(router);

installSchemaOrg({ app, router }, SCHEMA_ORG_USER_CONFIG);

app.mount('#app');

export { i18n };
