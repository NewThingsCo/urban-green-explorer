import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import MapMarkerAlt from '@/assets/icons/map-marker-alt.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import CheckIn from '@/components/CheckIn';
import '../Location.css';

export default defineComponent({
  name: 'GreenTramStop',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper location-wrapper">
          <h1 class="pt-10 title text-left">
            {this.$t('locations.tram.title')}
          </h1>
          <div class="py-40 h-1/2 bg-gray-400" />
          <label class="label">{this.$t('locations.tram.category')}</label>
          <p class="text-left">{this.$t('locations.tram.description')}</p>
          <div class="map-container">
            <div class="flex items-center">
              <MapMarkedAlt class="icon" />
              <RouterLink
                to={{ name: 'map', params: { id: 'green-tram-stop' } }}
                class="mx-2 show-map"
              >
                {this.$t('showOnMap')}
              </RouterLink>
            </div>
            <RouterLink to={{ name: 'map', params: { id: 'green-tram-stop' } }}>
              <MapMarkerAlt class="icon" />
            </RouterLink>
          </div>
        </AppMain>
        <AppFooter>
          <CheckIn />
        </AppFooter>
      </>
    );
  },
});
