import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    component: async () => await import('@/pages/IndexPage'),
    name: 'Home',
    path: '/',
  },
  {
    component: async () => await import('@/pages/AboutPage'),
    name: 'About',
    path: '/about',
  },
];

export { routes };
