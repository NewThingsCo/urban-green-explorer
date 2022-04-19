/* eslint-disable import/no-unresolved */
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import 'leaflet/dist/leaflet.css';
import { createApp } from 'vue';
import { router } from './router';
import App from './App';
import { i18n, pinia } from './utils';
import leaflet from './plugins/leaflet';

createApp(App).use(i18n).use(leaflet).use(pinia).use(router).mount('#app');

export { i18n };
