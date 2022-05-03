import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Navigation.css';
import { RouterLink } from 'vue-router';
import InfoIcon from '../../assets/icons/info-circle.svg';
import HomeIcon from '../../assets/icons/home.svg';
import MapMarkedAltIcon from '../../assets/icons/map-marked-alt.svg';
import ListIcon from '../../assets/icons/list-ul.svg';

import { routes } from '@/router';

export default defineComponent({
  name: 'Navigation',
  render(): VNode {
    return (
      <nav class="navigation">
        {routes.map((route) => (
          <>
            {'home' === route.name && (
              <RouterLink class="router-link" to={route.path}>
                <div class="icon">
                  <HomeIcon />
                </div>
                <span class="label">{route.name}</span>
              </RouterLink>
            )}
            {'locations' === route.name && (
              <RouterLink class="router-link" to={route.path}>
                <div class="icon">
                  <ListIcon />
                </div>
                <span class="label">{route.name}</span>
              </RouterLink>
            )}
            {'about' === route.name && (
              <RouterLink class="router-link" to={route.path}>
                <div class="icon">
                  <InfoIcon />
                </div>
                <span class="label">{route.name}</span>
              </RouterLink>
            )}
            {'map' === route.name && (
              <RouterLink class="router-link" to={route.path}>
                <div class="icon">
                  <MapMarkedAltIcon />
                </div>
                <span class="label">{route.name}</span>
              </RouterLink>
            )}
          </>
        ))}
      </nav>
    );
  },
});
