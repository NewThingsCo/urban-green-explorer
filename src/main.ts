/* eslint-disable import/no-unresolved */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App';
import 'virtual:windi-devtools';
import 'virtual:windi.css';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
