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
          <h1 class="pt-10 title text-left">{this.$t('locations.tram')}</h1>
          <div class="py-40 h-1/2 bg-gray-400" />
          <label class="label">Kortteli</label>
          <p class="text-left">
            Kierros alkaa Aurora-korttelin kulmalta, Parkly-ulkokalusteiden
            luota. Palvelun käyttämisen aloitukseen voi käyttää Parklyn
            ilmoitustaululla olevaa QR-koodia.
          </p>
          <div class="map-container">
            <div>
              <MapMarkedAlt class="icon" />
              <RouterLink
                to={{ name: 'map', params: { id: 'greentramstop' } }}
                class="mx-2 show-map"
              >
                {this.$t('showOnMap')}
              </RouterLink>
            </div>
            <RouterLink to={{ name: 'map', params: { id: 'greentramstop' } }}>
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
