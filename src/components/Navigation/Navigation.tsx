import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Navigation.css';
import { RouterLink } from 'vue-router';
import {
  GlobeAltIcon,
  InformationCircleIcon,
  HomeIcon,
} from '@heroicons/vue/solid';
import { routes } from '@/router';

export default defineComponent({
  name: 'Navigation',
  render(): VNode {
    return (
      <nav class="navigation">
        {routes.map((route) => (
          <RouterLink class="router-link" to={route.path}>
            {'home' === route.name && <HomeIcon class="icon" />}
            {'about' === route.name && <InformationCircleIcon class="icon" />}
            {'map' === route.name && <GlobeAltIcon class="icon" />}
          </RouterLink>
        ))}
      </nav>
    );
  },
});
