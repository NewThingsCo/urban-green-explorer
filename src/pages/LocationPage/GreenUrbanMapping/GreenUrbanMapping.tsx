import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { locations } from '../../../content/locations';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import CheckIn from '@/components/CheckIn';
import CategoryList from '@/components/CategoryList';
import '../Location.css';

export default defineComponent({
  name: 'GreenUrbanMapping',
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
          <h1 class="title">{this.$t('locations.greenUrbanMapping.title')}</h1>
          <div class="py-40 h-1/2 bg-gray-400" />
          <div class="px-4">
            <CategoryList categories={this.categories} />
            <p class="description">
              {this.$t('locations.greenUrbanMapping.description')}
            </p>
            <div class="map-container">
              <div class="flex items-center w-1/2">
                <MapMarkedAlt class="icon" />
                <RouterLink
                  to={{ name: 'map', params: { id: 'green-urban-mapping' } }}
                  class="mx-2 show-map"
                >
                  {this.$t('showOnMap')}
                </RouterLink>
              </div>
              <RouterLink
                to={{ name: 'map', params: { id: 'green-urban-mapping' } }}
              >
                <ChevronRight class="w-5" />
              </RouterLink>
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
