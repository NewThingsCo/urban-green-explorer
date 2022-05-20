import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import TramImage from '@/assets/images/Tram.jpeg?url';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
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
        <AppMain class="main-wrapper pb-80">
          <div class="location-wrapper">
            <h1 class="pt-10 px-4 title text-left text-black">
              {this.$t('locations.tram.title')}
            </h1>
            <img
              src={TramImage}
              alt={this.$t('locations.tram.title')}
              class="object-cover h-100 w-full"
            />
            <div class="px-4">
              <label class="label">{this.$t('locations.tram.category')}</label>
              <p class="text-left text-black">
                {this.$t('locations.tram.description')}
              </p>
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
                <RouterLink
                  to={{ name: 'map', params: { id: 'green-tram-stop' } }}
                >
                  <ChevronRight class="w-5" />
                </RouterLink>
              </div>
            </div>
          </div>
        </AppMain>
        <AppFooter>
          <CheckIn />
        </AppFooter>
      </>
    );
  },
});
