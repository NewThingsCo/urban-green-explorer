import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Navigation.css';
import { RouterLink } from 'vue-router';
import InfoIcon from '../../assets/icons/info-circle.svg?component';
import HomeIcon from '../../assets/icons/home.svg?component';
import MapMarkedAltIcon from '../../assets/icons/map-marked-alt.svg?component';
import ListIcon from '../../assets/icons/list.svg?component';

import { routes } from '@/router';

export default defineComponent({
  name: 'Navigation',
  render(): VNode {
    return (
      <nav class="navigation">
        {routes.map((route) => {
          switch (route.name) {
            case 'home':
              return (
                <RouterLink class="router-link" to={route.path}>
                  <HomeIcon class="icon" />
                  <span class="label">{route.name}</span>
                </RouterLink>
              );
            case 'list':
              return (
                <RouterLink class="router-link" to={route.path}>
                  <ListIcon class="icon" />
                  <span class="label">{route.name}</span>
                </RouterLink>
              );
            case 'info':
              return (
                <RouterLink class="router-link" to={route.path}>
                  <InfoIcon class="icon" />
                  <span class="label">{route.name}</span>
                </RouterLink>
              );
            case 'map':
              return (
                <RouterLink class="router-link" to={route.path}>
                  <MapMarkedAltIcon class="icon" />
                  <span class="label">{route.name}</span>
                </RouterLink>
              );
            default:
              return null;
          }
        })}
      </nav>
    );
  },
});
