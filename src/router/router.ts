import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    // Always scroll to top when changing paths internally
    return { top: 0 };
  },
  routes,
});

function goBack(): void {
  router.go(-1);
}

export { goBack, router };
