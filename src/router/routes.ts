import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    component: async () => await import('../pages/IndexPage'),
    name: 'home',
    path: '/',
  },
  {
    component: async () => await import('../pages/LocationsPage'),
    name: 'list',
    path: '/list',
  },
  {
    component: async () => await import('../pages/MapPage'),
    name: 'map',
    path: '/map',
  },
  {
    component: async () => await import('../pages/AboutPage'),
    name: 'info',
    path: '/info',
  },
];

export { routes };
