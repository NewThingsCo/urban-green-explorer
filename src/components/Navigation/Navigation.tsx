import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Button from '@/components/Button';
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
    const locationsActive = computed(() =>
      Boolean(route.name?.toString().startsWith('location'))
    );
    const mapActive = computed(() =>
      Boolean(route.name?.toString().startsWith('map'))
    );
    return { locationsActive, mapActive };
  },
  render(): VNode {
    return (
      <nav class="navigation">
        {routes.map((route) => {
          const classes = ['router-link'];
          switch (route.name?.toString()) {
            case 'index':
              return (
                <Button
                  class={classes.join(' ')}
                  to={{ path: route.path }}
                  type="router-link"
                >
                  <HomeIcon class="icon" />
                  <span class="link-text">
                    {this.$t(`routes.${route.name.toString()}`)}
                  </span>
                </Button>
              );
            case 'locations':
              if (this.locationsActive) classes.push('router-link-active');
              return (
                <Button
                  class={classes.join(' ')}
                  to={{ path: route.path }}
                  type="router-link"
                >
                  <ListIcon class="icon" />
                  <span class="link-text">
                    {this.$t(`routes.${route.name.toString()}`)}
                  </span>
                </Button>
              );
            case 'map':
              if (this.mapActive) classes.push('router-link-active');
              return (
                <Button
                  class={classes.join(' ')}
                  to={{ path: route.path }}
                  type="router-link"
                >
                  <MapMarkedAltIcon class="icon" />
                  <span class="link-text">
                    {this.$t(`routes.${route.name.toString()}`)}
                  </span>
                </Button>
              );
            case 'info':
              return (
                <Button
                  class={classes.join(' ')}
                  to={{ path: route.path }}
                  type="router-link"
                >
                  <InfoIcon class="icon" />
                  <span class="link-text">
                    {this.$t(`routes.${route.name.toString()}`)}
                  </span>
                </Button>
              );
            default:
              return null;
          }
        })}
      </nav>
    );
  },
});
