import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import HomeIcon from '@/assets/icons/home.svg?component';
import InfoIcon from '@/assets/icons/info-circle.svg?component';
import ListIcon from '@/assets/icons/list.svg?component';
import MapMarkedAltIcon from '@/assets/icons/map-marked-alt.svg?component';
import { routes } from '@/router';
import './Navigation.css';

export default defineComponent({
  name: 'Navigation',
  setup() {
    const route = useRoute();
    const mapActive = computed(() =>
      Boolean(route.name?.toString().startsWith('map'))
    );
    return { mapActive };
  },
  render(): VNode {
    return (
      <nav class="navigation">
        {routes.map((route) => {
          const classes = ['router-link'];
          switch (route.name?.toString()) {
            case 'index':
              return (
                <RouterLink class="router-link" to={route.path}>
                  <HomeIcon class="icon" />
                  <span class="link-text"> {route.name}</span>
                </RouterLink>
              );
            case 'locations':
              return (
                <RouterLink class="router-link" to={route.path}>
                  <ListIcon class="icon" />
                  <span class="link-text">{route.name}</span>
                </RouterLink>
              );
            case 'map':
              if (this.mapActive) classes.push('router-link-active');
              return (
                <RouterLink class={classes.join(' ')} to={route.path}>
                  <MapMarkedAltIcon class="icon" />
                  <span class="link-text">{route.name}</span>
                </RouterLink>
              );
            case 'info':
              return (
                <RouterLink class="router-link" to={route.path}>
                  <InfoIcon class="icon" />
                  <span class="link-text">{route.name}</span>
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
