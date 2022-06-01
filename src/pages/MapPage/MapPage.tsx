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
    const location = slug.value
      ? locations.find((l) => l.slug === slug.value)
      : null;
    return { location, slug };
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
          detectRetina: true,
          maxZoom: 30,
          tileSize: 512,
          zoomOffset: -1,
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

      // Location popups
      locations.map((l) => {
        this.$leaflet
          .marker([l.coordinates.lat, l.coordinates.lng], {
            icon: markerIcon,
          })
          .bindPopup(
            `<div class="flex flex-col items-center"><h2 class="text-sm">${this.$t(
              l.title
            )}</h2><a class="router-link" href="/location/${l.slug}"}>${this.$t(
              'moreInfo'
            )}</a></div>`
          )
          .addTo(map);
      });

      // Open pre-defined popup
      if (this.location) {
        console.debug('Showing popup for pre-defined location:', this.location);
        this.$leaflet
          .popup()
          .setLatLng([
            this.location.coordinates.lat,
            this.location.coordinates.lng,
          ])
          .setContent(
            `<div class="flex flex-col items-center"><h2 class="text-sm">${this.$t(
              this.location.title
            )}</h2><a class="router-link" href="/location/${
              this.location.slug
            }"}>${this.$t('moreInfo')}</a></div>`
          )
          .openOn(map);
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
