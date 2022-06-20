import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import Illustration from '@/components/Illustration';
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
        <AppMain class="main-locations main-wrapper">
          <h1 class="page-title" id="page-title">
            {this.$t('locationsTitle')}
          </h1>
          <ul aria-label={this.$t('locationList')} class="location-list">
            {locations.map((location, index) => (
              <li class="location">
                <RouterLink
                  class="location-link"
                  to={{ name: 'location', params: { id: location.slug } }}
                >
                  <img
                    alt={this.$t(location.title)}
                    class="image"
                    src={location.image}
                  />
                  <div class="content">
                    <h2
                      class="title"
                      v-html={`${index + 1}. ${this.$t(location.title)}`}
                    />
                    <CategoryList categories={location.categories} />
                    {location.subtitle && (
                      <h3 class="subtitle">{this.$t(location.subtitle)}</h3>
                    )}
                    <span class="label">{this.$t('showOnMap')}</span>
                  </div>
                </RouterLink>
                <RouterLink
                  class="map-link"
                  to={{
                    name: 'mapWithPopup',
                    params: { id: location.slug },
                  }}
                >
                  <MapMarkerAlt class="icon map-icon" />
                  <span class="label">{this.$t('showOnMap')}</span>
                </RouterLink>
              </li>
            ))}
          </ul>
        </AppMain>
        <Illustration />
        <AppFooter />
      </>
    );
  },
});
