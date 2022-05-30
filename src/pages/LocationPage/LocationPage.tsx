import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';
import ChevronRight from '@/assets/icons/chevron-right.svg?component';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import CategoryList from '@/components/CategoryList';
import CheckIn from '@/components/CheckIn';
import { locations } from '@/content/locations';
import './LocationPage.css';

export default defineComponent({
  name: 'Location',
  setup() {
    const route = useRoute();
    const { t } = useI18n();
    const location =
      locations.find((l) => l.slug === route.params.id?.toString()) || null;
    const categories = computed(() => location?.categories || []);
    const description = computed(() =>
      location?.description ? t(location?.description) : null
    );
    const image = computed(() => location?.image || null);
    const title = computed(() => (location?.title ? t(location.title) : null));
    return { categories, description, image, location, title };
  },
  render(): VNode {
    console.log(this.location?.slug);
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper main-location">
          {this.title && (
            <div class="container">
              <h1 class="title">{this.title}</h1>
            </div>
          )}
          {this.image && (
            <img
              alt={this.$t(this.title || '')}
              class="image"
              src={this.image}
            />
          )}
          <div class="container">
            <CategoryList categories={this.categories} />
            {this.description && (
              <p class="description">{this.$t(this.description)}</p>
            )}
            <div class="map-container">
              <div class="flex items-center">
                <MapMarkedAlt class="icon" />
                <RouterLink
                  to={{ name: 'map', params: { id: this.location?.slug } }}
                  class="mx-2 show-map"
                >
                  {this.$t('showOnMap')}
                </RouterLink>
              </div>
              <RouterLink
                to={{ name: 'map', params: { id: this.location?.slug } }}
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
