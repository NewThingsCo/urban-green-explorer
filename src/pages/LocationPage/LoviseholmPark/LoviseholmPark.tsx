import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import MapMarkerAlt from '../../../assets/icons/map-marker-alt.svg?component';
import MapMarkedAlt from '../../../assets/icons/map-marked-alt.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import '../Location.css';

export default defineComponent({
  name: 'LoviseholmPark',
  render() {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper location-wrapper">
          <h1 class="pt-10 title text-left">
            {this.$t('locations.loviseholm.title')}
          </h1>
          <div class="py-40 h-1/2 bg-gray-400" />
          <label class="label">
            {this.$t('locations.loviseholm.category')}
          </label>
          <p class="text-left">{this.$t('locations.loviseholm.description')}</p>
          <div class="map-container">
            <div class="flex items-center">
              <MapMarkedAlt class="icon" />
              <RouterLink
                to={{ name: 'map', params: { id: 'loviseholm-park' } }}
                class="mx-2 show-map"
              >
                {this.$t('showOnMap')}
              </RouterLink>
            </div>
            <RouterLink to={{ name: 'map', params: { id: 'loviseholm-park' } }}>
              <MapMarkerAlt class="icon" />
            </RouterLink>
          </div>
        </AppMain>
        <AppFooter>
          <i18n-t
            class="text"
            keypath="editComponent.text"
            scope="global"
            tag="p"
          >
            <a
              href={this.$t('editComponent.href')}
              target="_blank"
              rel="external"
            >
              <code>{this.$t('editComponent.label')}</code>
            </a>
          </i18n-t>
        </AppFooter>
      </>
    );
  },
});
