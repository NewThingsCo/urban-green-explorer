import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { locations } from '../../content/locations';
import MapMarkerAlt from '../../assets/icons/map-marker-alt.svg';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import AppFooter from '@/components/AppFooter';
import './LocationsPage.css';

export default defineComponent({
  name: 'LocationsPage',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper">
          <h1 class="title">{this.$t('locationsTitle')}</h1>
          <p>
            Here you'll find a list of locations to visit during your tour of
            Sompasaari.
          </p>

          <ul class="text-left items-center flex flex-col">
            {locations.map((location) => (
              <li class="list">
                <div class="flex flex-col w-full">
                  <h3>
                    {location.id}. {this.$t(location.title)}
                  </h3>
                  <label>{this.$t(location.label)}</label>
                  <RouterLink to={location.url} class="show-map">
                    {this.$t('showMap')}
                  </RouterLink>
                </div>
                <div class="icon">
                  <MapMarkerAlt />
                </div>
              </li>
            ))}
          </ul>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
