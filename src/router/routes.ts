import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    component: async () => await import('../pages/IndexPage'),
    name: 'home',
    path: '/',
  },
  {
    component: async () => await import('../pages/AboutPage'),
    name: 'about',
    path: '/about',
  },
  {
    component: async () => await import('../pages/LocationsPage'),
    name: 'locations',
    path: '/locations',
  },
  {
    component: async () => await import('../pages/MapPage'),
    name: 'map',
    path: '/map',
  },
];

export { routes };
