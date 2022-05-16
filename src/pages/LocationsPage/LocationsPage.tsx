import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { locations } from '../../content/locations';
import MapMarkerAlt from '../../assets/icons/map-marker-alt.svg?component';
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
        <AppMain class="main-wrapper main-locations">
          <h1 class="title">{this.$t('locationsTitle')}</h1>
          <ul class="text-left items-center flex flex-col">
            {locations.map((location) => (
              <li class="list">
                <a
                  class="bg-gray-300 cursor-pointer mr-3 p-10"
                  href={`/location/${location.params}`}
                />
                <div class="flex flex-col w-full">
                  <h3>
                    {location.id}. {this.$t(location.title)}
                  </h3>
                  <label>{this.$t(location.category)}</label>
                  <RouterLink
                    to={{ name: 'map', params: { id: location.params } }}
                    class="show-map"
                  >
                    {this.$t('showOnMap')}
                  </RouterLink>
                </div>
                <RouterLink
                  to={{ name: 'map', params: { id: location.params } }}
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
