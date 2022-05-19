import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import ParklyImage from '@/assets/images/Parkly.jpeg';
import MapMarkerAlt from '@/assets/icons/map-marker-alt.svg?component';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import { locations } from '@/content/locations';
import './LocationsPage.css';

export default defineComponent({
  name: 'LocationsPage',
  setup() {
    const imgUrl = new URL(ParklyImage, import.meta.url).href;
    return {
      imgUrl,
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
                    {' '}
                    <img src={this.imgUrl} class="object-fill h-20 w-43" />
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
