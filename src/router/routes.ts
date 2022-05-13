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
    path: '/location/aurora-block',
  },
  {
    component: async () => await import('../pages/LocationPage/LoviseholmPark'),
    name: 'loviseholmpark',
    path: '/location/loviseholm-park',
  },
  {
    component: async () =>
      await import('../pages/LocationPage/GreenUrbanMapping'),
    name: 'green-urban-mapping',
    path: '/location/green-urban-mapping',
  },
  {
    component: async () => await import('../pages/LocationPage/GreenTramStop'),
    name: 'green-tram-stop',
    path: '/location/green-tram-stop',
  },
  {
    component: async () => await import('../pages/InfoPage'),
    name: 'info',
    path: '/info',
  },
];

export { routes };
