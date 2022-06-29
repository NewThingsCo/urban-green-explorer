/* eslint-disable import/no-unresolved */
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import 'leaflet/dist/leaflet.css';
import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';
import { createSchemaOrg, useVueUseHead } from '@vueuse/schema-org';
import { createHead } from '@vueuse/head';
import { router } from './router';
import App from './App';
import { i18n, pinia } from './utils';
import leaflet from './plugins/leaflet';
import { SCHEMA_ORG_OPTIONS } from './constants';

if ('undefined' !== typeof window) {
  registerSW({
    onOfflineReady() {
      console.info('Offline ready.');
    },
  });
}

const head = createHead();

const schemaOrg = createSchemaOrg({
  ...SCHEMA_ORG_OPTIONS,
  provider: {
    name: 'vite',
    setupDOM: useVueUseHead(head),
    useRoute: () => router.currentRoute.value,
  },
});

createApp(App)
  .use(i18n)
  .use(head)
  .use(leaflet)
  .use(pinia)
  .use(router)
  .use(schemaOrg)
  .mount('#app');

schemaOrg.setupDOM();

export { i18n };
