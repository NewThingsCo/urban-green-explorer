import type { VNode } from 'vue';
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import MapMarkerAltIcon from '../../assets/icons/map-marker-alt.svg?raw';
import { locations } from '../../content/locations';
import { handleMapLink } from './handleMapLink';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import AppMain from '@/components/AppMain';
import './MapPage.css';
import 'leaflet.locatecontrol';

export default defineComponent({
  name: 'MapPage',
  setup() {
    const route = useRoute();
    const id = computed(() => route.params.id);
    return {
      id,
    };
  },
  onBeforeMount() {
    Array.from(window.document.querySelectorAll('.router-link')).forEach(
      ($link: Element): void => {
        $link.removeEventListener('click', handleMapLink);
      }
    );
  },
  mounted() {
    if (!this.$leaflet) return;
    try {
      Array.from(window.document.querySelectorAll('.router-link')).forEach(
        ($link: Element): void => {
          $link.addEventListener('click', handleMapLink);
        }
      );
      const map = this.$leaflet.map('map').setView([60.1807, 24.9761], 16.5);
      this.$leaflet.control
        .locate({
          position: 'topleft',
          icon: 'leaflet-control-locate-location-arrow',
        })
        .addTo(map);
      this.$leaflet
        .tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 30,
          tileSize: 512,
          zoomOffset: -1,
        })
        .addTo(map);

      // MARKERS
      const markerIcon = this.$leaflet.divIcon({
        html: MapMarkerAltIcon,
        className: '',
        iconSize: [24, 40],
        iconAnchor: [12, 40],
      });

      // POPUP ON MARKER CLICK
      const { t } = useI18n();
      locations.map((location) => {
        this.$leaflet
          .marker([location.coordinates[0], location.coordinates[1]], {
            icon: markerIcon,
          })
          .bindPopup(
            `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
              location.title
            )}</h2><a class="router-link" href="/location/${
              location.params
            }"}>${t('moreInfo')}</a></div>`
          )
          .addTo(map);
      });

      // POPUPS
      switch (this.id) {
        case 'parkly':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[0].coordinates[0],
              locations[0].coordinates[1],
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
                locations[0].title
              )}</h2><a class="router-link" href="/location/${
                locations[0].params
              }"}>${t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        case 'aurora-block':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[1].coordinates[0],
              locations[1].coordinates[1],
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
                locations[1].title
              )}</h2><a class="router-link" href="/location/${
                locations[1].params
              }"}>${t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        case 'loviseholm-park':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[2].coordinates[0],
              locations[2].coordinates[1],
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
                locations[2].title
              )}</h2><a class="router-link" href="/location/${
                locations[2].params
              }"}>${t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        case 'green-urban-mapping':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[3].coordinates[0],
              locations[3].coordinates[1],
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
                locations[3].title
              )}</h2><a class="router-link" href="/location/${
                locations[3].params
              }"}>${t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        case 'green-tram-stop':
          this.$leaflet
            .popup()
            .setLatLng([
              locations[4].coordinates[0],
              locations[4].coordinates[1],
            ])
            .setContent(
              `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
                locations[4].title
              )}</h2><a class="router-link" href="/location/${
                locations[4].params
              }"}>${t('moreInfo')}</a></div>`
            )
            .openOn(map);
          break;
        default:
          console.warn('Unhandled popup case:', this.id);
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
