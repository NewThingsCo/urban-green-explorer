import type { Location } from '@/types';
import type { Layer, Map, PopupEvent, TileLayer } from 'leaflet';
import {
  VNode,
  VNodeRef,
  watch,
  computed,
  defineComponent,
  onMounted,
  ref,
  onBeforeUnmount,
} from 'vue';
import leaflet from 'leaflet';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
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
    const router = useRouter();
    const mapInstance = ref<null | Map>(null);
    const layers = ref<null | TileLayer>(null);
    const map = ref<null | VNodeRef>(null);

    /** Marker icon used for locations. */
    const markerIcon = leaflet.divIcon({
      className: '',
      html: MapMarkerAltIcon,
      iconAnchor: [12, 40],
      iconSize: [24, 40],
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

    /** Handles route changes based on the `href` value of a link. */
    function handleRouteChange(event: Event): void {
      event.preventDefault();
      const href = (event.target as HTMLAnchorElement).href;
      const path = new URL(href).pathname;
      console.debug('Redirecting to:', path);
      router.push({ path });
    }

    /** Binds event handlers to router links within popups. */
    function bindPopupLinks(): void {
      Array.from(
        map.value.$el.querySelectorAll('.router-link') as HTMLCanvasElement[]
      ).forEach(($link) => {
        console.debug('Adding event listener to:', $link);
        $link.addEventListener('click', handleRouteChange);
      });
    }

    /** Removes event handlers from router links within popups. */
    function resetPopupLinks(): void {
      Array.from(
        map.value.$el.querySelectorAll('.router-link') as HTMLCanvasElement[]
      ).forEach(($link) => {
        console.debug('Removing event listener from:', $link);
        $link.removeEventListener('click', handleRouteChange);
      });
    }

    /** Handles `popupclose` events. */
    function handlePopupclose(event: PopupEvent): void {
      resetPopupLinks();
      console.debug('Popup closed:', event);
    }

    /** Handles `popupopen` events. */
    function handlePopupopen(event: PopupEvent): void {
      console.debug('Popup opened:', event);
      bindPopupLinks();
    }

    /** Removes markers from the map. */
    function removeMarker(layer: Layer): void {
      if (!layer.hasEventListeners('click')) return;
      console.debug('Removing marker:', layer);
      layer.remove();
    }

    /** Renders popup content. */
    function renderPopup(l: Location): string {
      return `<div class="flex flex-col items-center"><h2 class="text-sm">${t(
        l.title
      )}</h2><a class="router-link" href="/location/${l.slug}">${t(
        'moreInfo'
      )}</a></div>`;
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

      // Handle popup events
      mapInstance.value.addEventListener('popupclose', handlePopupclose);
      mapInstance.value.addEventListener('popupopen', handlePopupopen);

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

    /** Removes event listeners from instance. */
    function removeEventListeners(): void {
      mapInstance.value?.removeEventListener('popupclose', handlePopupclose);
      mapInstance.value?.removeEventListener('popupopen', handlePopupopen);
      resetPopupLinks();
    }

    // Watch for locale changes
    watch(locale, handleLocaleChange);

    // Initialize map on mount
    onMounted(initializeMap);

    // Remove event listeners on unmount
    onBeforeUnmount(removeEventListeners);

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
