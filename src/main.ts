/* eslint-disable import/no-unresolved */
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import { createApp } from 'vue';
import App from './App';
import { i18n, pinia } from './utils';

createApp(App).use(i18n).use(pinia).mount('#app');

export { i18n };
