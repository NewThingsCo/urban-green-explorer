import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import AuroraImage from '@/assets/images/Aurora.jpeg?url';
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
  name: 'AuroraBlock',
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
          <h1 class="title">{this.$t('locations.aurora.title')}</h1>
          <img src={AuroraImage} alt={this.$t('locations.aurora.title')} />
          <div class="px-4">
            <CategoryList categories={this.categories} />
            <p class="description">{this.$t('locations.aurora.description')}</p>
            <div class="map-container">
              <div class="flex items-center">
                <MapMarkedAlt class="icon" />
                <RouterLink
                  to={{ name: 'map', params: { id: 'aurora-block' } }}
                  class="mx-2 show-map"
                >
                  {this.$t('showOnMap')}
                </RouterLink>
              </div>
              <RouterLink to={{ name: 'map', params: { id: 'aurora-block' } }}>
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
