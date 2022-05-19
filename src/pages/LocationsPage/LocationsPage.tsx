import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import ParklyImage from '@/assets/images/Parkly.jpeg';
import AuroraImage from '@/assets/images/Aurora.jpeg';
import LoviseholmImage from '@/assets/images/Loviseholm.jpeg';
import TramImage from '@/assets/images/Tram.jpeg';
import MapMarkerAlt from '@/assets/icons/map-marker-alt.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import { locations } from '@/content/locations';
import './LocationsPage.css';

export default defineComponent({
  name: 'LocationsPage',
  setup() {
    const parklyUrl = new URL(ParklyImage, import.meta.url).href;
    const auroraUrl = new URL(AuroraImage, import.meta.url).href;
    const loviseholmUrl = new URL(LoviseholmImage, import.meta.url).href;
    const greenUrbanUrl = new URL(ParklyImage, import.meta.url).href;
    const tramUrl = new URL(TramImage, import.meta.url).href;

    return {
      parklyUrl,
      auroraUrl,
      loviseholmUrl,
      greenUrbanUrl,
      tramUrl,
    };
  },
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
                              src={this.parklyUrl}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'aurora-block':
                          return (
                            <img
                              src={this.auroraUrl}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'loviseholm-park':
                          return (
                            <img
                              src={this.loviseholmUrl}
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
                              src={this.tramUrl}
                              class="object-fill h-21 w-43"
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </a>
                  <div class="flex flex-col w-full">
                    <h2>
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
