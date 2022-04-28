import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Navigation.css';
import { RouterLink } from 'vue-router';
import InfoIcon from '../../assets/icons/info-circle.svg';
import HomeIcon from '../../assets/icons/home.svg';
import MapMarkedAltIcon from '../../assets/icons/map-marked-alt.svg';

import { routes } from '@/router';

export default defineComponent({
  name: 'Navigation',
  render(): VNode {
    return (
      <nav class="navigation">
        {routes.map((route) => (
          <RouterLink class="router-link" to={route.path}>
            {'home' === route.name && (
              <div class="icon">
                <HomeIcon />
              </div>
            )}
            {'about' === route.name && (
              <div class="icon">
                <InfoIcon />
              </div>
            )}
            {'map' === route.name && (
              <div class="icon">
                <MapMarkedAltIcon />
              </div>
            )}
          </RouterLink>
        ))}
      </nav>
    );
  },
});
