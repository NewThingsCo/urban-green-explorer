import type { Location } from '@/types';
import type { Map, TileLayer } from 'leaflet';
import type { VNode, VNodeRef } from 'vue';
import leaflet from 'leaflet';
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import MapMarkerAltIcon from '@/assets/icons/map-marker-alt.svg?raw';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import { DEFAULT_MAP_COORDINATES, LIGHT_MAP_THEME } from '@/constants';
import { locations } from '@/content/locations';
import 'leaflet.locatecontrol';
import './MapPage.css';

export default defineComponent({
  name: 'MapPage',
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const mapInstance = ref<null | Map>(null);
    const layers = ref<null | TileLayer>(null);
    const map = ref<null | VNodeRef>(null);

    /** Marker icon used in the map. */
    const markerIcon = leaflet.divIcon({
      html: MapMarkerAltIcon,
      className: '',
      iconSize: [24, 40],
      iconAnchor: [12, 40],
    });

    /** Location slug. */
    const slug = computed(() => route.params?.id || null);

    function invalidateMap(): void {
      mapInstance.value?.invalidateSize();
    }

    /** Current location based on slug value. */
    const location = slug.value
      ? locations.find((l) => l.slug === slug.value)
      : null;

    /** Invalidates map size when window is resized. */
    const resizeObserver = new ResizeObserver(invalidateMap);

    /** Renders popup content. */
    function renderPopup(l: Location): string {
      return `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
        l.title
      )}</h2><a class="router-link" href="/location/${l.slug}">${t(
        'moreInfo'
      )}</a></div>`;
    }

    /** Creates markers for locations. */
    function createLocationMarker(l: Location): void {
      leaflet
        .marker([l.coordinates.lat, l.coordinates.lng], {
          icon: markerIcon,
        })
        .bindPopup(renderPopup(l))
        .addTo(mapInstance.value as Map);
    }

    onMounted(() => {
      // Create map instance
      mapInstance.value = leaflet
        .map(map.value.$el)
        .setView(DEFAULT_MAP_COORDINATES, 16.5);

      // Add tiles
      layers.value = leaflet
        .tileLayer(LIGHT_MAP_THEME.urlTemplate, LIGHT_MAP_THEME.options)
        .addTo(mapInstance.value as Map);

      // Add location markers
      locations.map(createLocationMarker);

      // Invalidate map on window resize
      resizeObserver.observe(map.value.$el);

      // Open pre-defined popup
      if (location) {
        console.debug('Showing popup for pre-defined location:', location);
        leaflet
          .popup()
          .setLatLng([location.coordinates.lat, location.coordinates.lng])
          .setContent(renderPopup(location))
          .openOn(mapInstance.value as Map);
      }
    });
    return { map };
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="map" ref="map" />
        <AppFooter />
      </>
    );
  },
});
