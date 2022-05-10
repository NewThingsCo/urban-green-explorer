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
    path: '/map:id',
  },
  {
    component: async () => await import('../pages/LocationPage/Parkly'),
    name: 'parkly',
    path: '/location/parkly',
  },
  {
    component: async () => await import('../pages/LocationPage/AuroraBlock'),
    name: 'aurorablock',
    path: '/location/aurorablock',
  },
  {
    component: async () => await import('../pages/LocationPage/LoviseholmPark'),
    name: 'loviseholmpark',
    path: '/location/loviseholmpark',
  },
  {
    component: async () =>
      await import('../pages/LocationPage/GreenUrbanMapping'),
    name: 'greenurbanmapping',
    path: '/location/greenurbanmapping',
  },
  {
    component: async () => await import('../pages/LocationPage/GreenTramStop'),
    name: 'greentrampstop',
    path: '/location/greentramstop',
  },
  {
    component: async () => await import('../pages/InfoPage'),
    name: 'info',
    path: '/info',
  },
];

export { routes };
