import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function goBack(): void {
  router.go(-1);
}

export { router, goBack };
