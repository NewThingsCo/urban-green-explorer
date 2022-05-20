import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import ParklyImage from '@/assets/images/Parkly.jpeg?url';
import AuroraImage from '@/assets/images/Aurora.jpeg?url';
import LoviseholmImage from '@/assets/images/Loviseholm.jpeg?url';
import TramImage from '@/assets/images/Tram.jpeg?url';
import MapMarkerAlt from '@/assets/icons/map-marker-alt.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import { locations } from '@/content/locations';
import './LocationsPage.css';

export default defineComponent({
  name: 'LocationsPage',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper">
          <div class="main-locations">
            <h1 class="title">{this.$t('locationsTitle')}</h1>
            <ul class="text-left items-center flex flex-col">
              {locations.map((location) => (
                <li class="list">
                  <a
                    class="cursor-pointer mr-3"
                    href={`/location/${location.params}`}
                  >
                    {(() => {
                      switch (location.params) {
                        case 'parkly':
                          return (
                            <img
                              src={ParklyImage}
                              alt={this.$t('locations.parkly.title')}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'aurora-block':
                          return (
                            <img
                              src={AuroraImage}
                              alt={this.$t('locations.aurora.title')}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'loviseholm-park':
                          return (
                            <img
                              src={LoviseholmImage}
                              alt={this.$t('locations.loviseholm.title')}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'green-urban-mapping':
                          return (
                            <div class="bg-gray-400 object-fill h-21 w-26" />
                          );
                        case 'green-tram-stop':
                          return (
                            <img
                              src={TramImage}
                              alt={this.$t('locations.tram.title')}
                              class="object-fill h-21 w-43"
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </a>
                  <div class="flex flex-col w-full">
                    <h2 class="text-black">
                      {location.id}. {this.$t(location.title)}
                    </h2>
                    <ul
                      aria-label={this.$t('categories')}
                      class="list-none"
                      role="list"
                    >
                      <li class="category" role="listitem">
                        {this.$t(location.category)}
                      </li>
                    </ul>
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
          </div>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
