import type { Routes } from '~/types';

/** Routes used for testing. */
const routes: Routes = [
  {
    component: async () => await import('~/pages/index'),
    name: 'home',
    path: '/',
  },
  {
    component: async () => await import('~/pages/about'),
    name: 'about',
    path: '/about',
  },
];

export { routes };
