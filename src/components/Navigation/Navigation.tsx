import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Navigation.css';
import { routes } from '@/router';

export default defineComponent({
  name: 'Navigation',
  render(): VNode {
    return (
      <nav class="navigation">
        {routes.map((route) => (
          <router-link class="router-link" to={route.path}>
            {route.name}
          </router-link>
        ))}
      </nav>
    );
  },
});
