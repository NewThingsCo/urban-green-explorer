import type { PropType, VNode } from 'vue';
import type { Routes } from '~/types';
import { defineComponent } from 'vue';
import './Navigation.css';

export default defineComponent({
  name: 'Navigation',
  props: {
    routes: {
      default: () => [],
      type: Array as PropType<Routes>,
    },
  },
  render(): VNode {
    return (
      <nav class="navigation">
        {this.routes.map((route) => (
          <router-link class="router-link" to={route.path}>
            {route.name}
          </router-link>
        ))}
      </nav>
    );
  },
});
