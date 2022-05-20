import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import ParklyImage from '@/assets/images/Parkly.jpeg?url';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import CheckIn from '@/components/CheckIn';
import '../Location.css';

export default defineComponent({
  name: 'Parkly',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper main-location">
          <h1 class="title">{this.$t('locations.parkly.title')}</h1>
          <img src={ParklyImage} alt={this.$t('locations.parkly.title')} />
          <div class="px-4">
            <label class="label"> {this.$t('locations.parkly.category')}</label>
            <p class="description">{this.$t('locations.parkly.description')}</p>
            <li class="list">
              <div class="map-container">
                <div class="flex items-center">
                  <MapMarkedAlt class="icon" />
                  <RouterLink
                    to={{ name: 'map', params: { id: 'parkly' } }}
                    class="mx-2 show-map"
                  >
                    {this.$t('showOnMap')}
                  </RouterLink>
                </div>
                <RouterLink to={{ name: 'map', params: { id: 'parkly' } }}>
                  <ChevronRight class="w-5" />
                </RouterLink>
              </div>
            </li>
          </div>
        </AppMain>
        <AppFooter>
          <CheckIn />
        </AppFooter>
      </>
    );
  },
});
