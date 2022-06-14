import type { Location } from '@/types';
import type { Layer, Map, TileLayer } from 'leaflet';
import {
  VNode,
  VNodeRef,
  watch,
  computed,
  defineComponent,
  onMounted,
  ref,
} from 'vue';
import leaflet from 'leaflet';
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
    const { locale, t } = useI18n();
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

    /** Current location based on slug value. */
    const location = slug.value
      ? locations.find((l) => l.slug === slug.value)
      : null;

    /** Invalidates map size. */
    function invalidateMap(): void {
      mapInstance.value?.invalidateSize();
    }

    /** Creates markers for locations. */
    function createLocationMarker(l: Location): void {
      const marker = leaflet
        .marker([l.coordinates.lat, l.coordinates.lng], {
          icon: markerIcon,
        })
        .bindPopup(renderPopup(l));
      console.debug('Creating marker:', marker);
      marker.addTo(mapInstance.value as Map);
    }

    /** Handles locale changes. */
    function handleLocaleChange(): void {
      console.info('Locale change detected.');
      resetMap();
      locations.map(createLocationMarker);
    }

    /** Renders popup content. */
    function renderPopup(l: Location): string {
      return `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
        l.title
      )}</h2><a class="router-link" href="/location/${l.slug}">${t(
        'moreInfo'
      )}</a></div>`;
    }

    /** Removes a layer from the map if it contains click events. */
    function removeMarker(layer: Layer): void {
      if (!layer.hasEventListeners('click')) return;
      console.debug('Removing marker:', layer);
      layer.remove();
    }

    /** Resets the map and re-renders popups. */
    function resetMap(): void {
      console.log('Closing popups …');
      mapInstance.value?.closePopup();
      mapInstance.value?.eachLayer(removeMarker);
    }

    /** Invalidates map size when window is resized. */
    const resizeObserver = new ResizeObserver(invalidateMap);

    /** Initializes the map. */
    function initializeMap(): void {
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
    }

    // Watch for locale changes
    watch(locale, handleLocaleChange);

    // Initialize map on load
    onMounted(initializeMap);

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
