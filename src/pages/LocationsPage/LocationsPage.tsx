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
        <AppMain class="main-wrapper">
          <div class="main-locations">
            <h1 class="title">{this.$t('locationsTitle')}</h1>
            <ul class="text-left items-center flex flex-col">
              {locations.map((location, index) => (
                <li class="list">
                  <a
                    class="cursor-pointer mr-3"
                    href={`/location/${location.slug}`}
                  >
                    {(() => {
                      switch (location.slug) {
                        case 'parkly':
                          return (
                            <img
                              src={location.image}
                              alt={this.$t('locations.parkly.title')}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'aurora-block':
                          return (
                            <img
                              src={location.image}
                              alt={this.$t('locations.auroraBlock.title')}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'loviseholm-park':
                          return (
                            <img
                              src={location.image}
                              alt={this.$t('locations.loviseholm.title')}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'green-urban-mapping':
                          return (
                            <img
                              src={location.image}
                              alt={this.$t('locations.greenUrbanMapping.title')}
                              class="object-fill h-21 w-43"
                            />
                          );
                        case 'green-tram-stop':
                          return (
                            <img
                              src={location.image}
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
                      {index + 1}. {this.$t(location.title)}
                    </h2>
                    <CategoryList categories={location.categories} />
                    <RouterLink
                      to={{ name: 'map', params: { id: location.slug } }}
                      class="show-map"
                    >
                      {this.$t('showOnMap')}
                    </RouterLink>
                  </div>
                  <RouterLink
                    to={{ name: 'map', params: { id: location.slug } }}
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
