import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import TramImage from '@/assets/images/Tram.jpeg?url';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import CheckIn from '@/components/CheckIn';
import CategoryList from '@/components/CategoryList';
import '../Location.css';
import { locations } from '@/content/locations';

export default defineComponent({
  name: 'GreenTramStop',
  setup() {
    const route = useRoute();
    const location =
      locations.find((l) => l.slug === route.name?.toString()) || null;
    const categories = location?.categories || [];
    return { categories };
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper main-location">
          <div class="location-wrapper">
            <h1 class="title">{this.$t('locations.tram.title')}</h1>
            <img src={TramImage} alt={this.$t('locations.tram.title')} />
            <div class="px-4">
              <CategoryList categories={this.categories} />
              <p class="description">{this.$t('locations.tram.description')}</p>
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
