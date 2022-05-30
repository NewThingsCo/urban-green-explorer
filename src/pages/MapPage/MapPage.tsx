import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { handleMapLink } from './handleMapLink';
import MapMarkerAltIcon from '@/assets/icons/map-marker-alt.svg?raw';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import { locations } from '@/content/locations';
import 'leaflet.locatecontrol';
import './MapPage.css';

export default defineComponent({
  name: 'MapPage',
  setup() {
    const route = useRoute();
    const slug = computed(() => route.params?.id || null);
    return { slug };
  },
  beforeUnmount() {
    Array.from(window.document.querySelectorAll('.router-link')).forEach(
      ($link: Element): void => {
        $link.removeEventListener('click', handleMapLink);
      }
    );
  },
  mounted() {
    if (!this.$leaflet) return;
    try {
      const mapDiv = document.getElementById('map') as HTMLDivElement;
      const map = this.$leaflet.map(mapDiv).setView([60.1807, 24.9773], 16.5);
      this.$leaflet.control
        .locate({
          position: 'topleft',
          icon: 'leaflet-control-locate-location-arrow',
        })
        .addTo(map);
      this.$leaflet
        .tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
          attribution:
            'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 30,
          tileSize: 512,
          zoomOffset: -1,
          detectRetina: true,
        })
        .addTo(map);

      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize();
      });

      resizeObserver.observe(mapDiv);

      // MARKERS
      const markerIcon = this.$leaflet.divIcon({
        html: MapMarkerAltIcon,
        className: '',
        iconSize: [24, 40],
        iconAnchor: [12, 40],
      });

      // POPUP ON MARKER CLICK
      locations.map((location) => {
        this.$leaflet
          .marker([location.coordinates.lat, location.coordinates.lng], {
            icon: markerIcon,
          })
          .bindPopup(
            `<div class="flex flex-col items-center"><h2 class="text-sm">${this.$t(
              location.title
            )}</h2><a class="router-link" href="/location/${
              location.slug
            }"}>${this.$t('moreInfo')}</a></div>`
          )
          .addTo(map);
      });

      // POPUPS
      switch (this.slug) {
        case 'aurora-block':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[1].coordinates.lat,
              locations[1].coordinates.lng,
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${this.$t(
                locations[1].title
              )}</h2><a class="router-link" href="/location/${
                locations[1].slug
              }"}>${this.$t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        case 'green-tram-stop':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[4].coordinates.lat,
              locations[4].coordinates.lng,
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${this.$t(
                locations[4].title
              )}</h2><a class="router-link" href="/location/${
                locations[4].slug
              }"}>${this.$t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        case 'green-urban-mapping':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[3].coordinates.lat,
              locations[3].coordinates.lng,
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${this.$t(
                locations[3].title
              )}</h2><a class="router-link" href="/location/${
                locations[3].slug
              }"}>${this.$t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        case 'loviseholm-park':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[2].coordinates.lat,
              locations[2].coordinates.lng,
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${this.$t(
                locations[2].title
              )}</h2><a class="router-link" href="/location/${
                locations[2].slug
              }"}>${this.$t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        case 'parkly':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[0].coordinates.lat,
              locations[0].coordinates.lng,
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${this.$t(
                locations[0].title
              )}</h2><a class="router-link" href="/location/${
                locations[0].slug
              }"}>${this.$t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        default:
          console.log('No pre-determined location detected.');
      }
    } catch (error) {
      console.error(error);
    }
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="map" id="map" ref="map" />
        <AppFooter />
      </>
    );
  },
});
