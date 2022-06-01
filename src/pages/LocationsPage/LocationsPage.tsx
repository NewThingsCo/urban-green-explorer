import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import MapMarkerAlt from '@/assets/icons/map-marker-alt.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import CategoryList from '@/components/CategoryList';
import { locations } from '@/content/locations';
import './LocationsPage.css';

export default defineComponent({
  name: 'LocationsPage',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain>
          <h1 class="page-title">{this.$t('locationsTitle')}</h1>
          <ul class="location-list">
            {locations.map((location, index) => (
              <li class="location">
                <RouterLink
                  class="image-link"
                  to={{ name: 'location', params: { id: location.slug } }}
                >
                  <img
                    alt={this.$t(location.title)}
                    class="image"
                    src={location.image}
                  />
                </RouterLink>
                <div class="content">
                  <h2 class="title">
                    <RouterLink
                      class="title-link"
                      to={{ name: 'location', params: { id: location.slug } }}
                    >
                      {index + 1}. {this.$t(location.title)}
                    </RouterLink>
                  </h2>
                  <CategoryList categories={location.categories} />
                  <RouterLink
                    class="map-link"
                    to={{
                      name: 'mapWithPopup',
                      params: { id: location.slug },
                    }}
                  >
                    {this.$t('showOnMap')}
                  </RouterLink>
                </div>
                <RouterLink
                  to={{ name: 'mapWithPopup', params: { id: location.slug } }}
                >
                  <MapMarkerAlt class="icon" />
                </RouterLink>
              </li>
            ))}
          </ul>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
