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
];

export { routes };
