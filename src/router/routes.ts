import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    component: async () => await import('../pages/IndexPage'),
    name: 'index',
    path: '/',
  },
  {
    component: async () => await import('../pages/LocationPage'),
    name: 'location',
    path: '/location/:id',
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
  {
    component: async () => await import('../pages/MapPage'),
    name: 'mapWithPopup',
    path: '/map/:id',
  },
  {
    component: async () => await import('../pages/InfoPage'),
    name: 'info',
    path: '/info',
  },
];

export { routes };
