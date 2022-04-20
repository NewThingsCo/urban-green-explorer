import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Navigation.css';
import { RouterLink } from 'vue-router';
import { routes } from '@/router';

export default defineComponent({
  name: 'Navigation',
  render(): VNode {
    return (
      <nav class="navigation">
        {routes.map((route) => (
          <RouterLink class="router-link" to={route.path}>
            {route.name}
          </RouterLink>
        ))}
      </nav>
    );
  },
});
