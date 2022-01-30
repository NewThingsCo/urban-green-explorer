/* eslint-disable import/no-unresolved */
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import devalue from '@nuxt/devalue';
import { ViteSSG } from 'vite-ssg';
import App from './App';
import { i18n, pinia } from './utils';
import { head } from './utils/head';
import routes from '~pages';

const createApp = ViteSSG(
  App,
  { routes },
  ({ app, initialState }) => {
    app.use(head);
    app.use(i18n);
    app.use(pinia);
    if (import.meta.env.SSR) {
      initialState.pinia = pinia.state.value;
    } else {
      pinia.state.value = initialState?.pinia || {};
    }
  },
  {
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state;
    },
  }
);

export { createApp };
