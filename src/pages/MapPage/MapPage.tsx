import type { AntPathOptions, Coordinates, Location } from '@/types';
import type {
  Control,
  LatLngTuple,
  Layer,
  Map,
  MarkerOptions,
  PopupEvent,
  TileLayer,
} from 'leaflet';
import leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import 'leaflet.locatecontrol';
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  VNode,
  VNodeRef,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { renderToString } from 'vue/server-renderer';
import MapMarkerAltIcon from '@/assets/icons/map-marker-alt.svg?raw';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import {
  DEFAULT_MAP_COORDINATES,
  LIGHT_MAP_THEME,
  LOCATIONS,
} from '@/constants';
import './MapPage.css';

export default defineComponent({
  name: 'MapPage',
  setup() {
    const { locale, t } = useI18n();
    const layers = ref<null | TileLayer>(null);
    const map = ref<null | VNodeRef>(null);
    const mapInstance = ref<null | Map>(null);
    const route = useRoute();
    const router = useRouter();

    /** Options for the `Leaflet.Locate` plugin. */
    const locateControlOptions: Control.LocateOptions = {
      icon: 'leaflet-control-locate-location-arrow',
      locateOptions: {
        enableHighAccuracy: true,
      },
      position: 'topleft',
    };

    /** Latitude and longitudes for Ant Path. */
    const antPathCoordinates: Coordinates[] = [
      LOCATIONS[0].coordinates,
      { lat: 60.1813, lng: 24.97726 },
      { lat: 60.18142, lng: 24.97726 },
      LOCATIONS[1].coordinates,
      { lat: 60.1816, lng: 24.97709 },
      { lat: 60.1813, lng: 24.9772 },
      { lat: 60.18072, lng: 24.97698 },
      { lat: 60.18069, lng: 24.97729 },
      { lat: 60.18084, lng: 24.97737 },
      LOCATIONS[2].coordinates,
      { lat: 60.18084, lng: 24.97784 },
      LOCATIONS[3].coordinates,
      { lat: 60.1805, lng: 24.97836 },
      { lat: 60.18055, lng: 24.97844 },
      { lat: 60.18095, lng: 24.97862 },
      LOCATIONS[4].coordinates,
      LOCATIONS[0].coordinates,
    ];

    /** Ant Path options. */
    const antPathOptions: Partial<AntPathOptions> = {
      color: '#00D7A7',
      dashArray: [2, 70],
      delay: 1600,
      fill: false,
      pulseColor: '#ffffff',
      weight: 4,
    };

    /** Ant Path control for Leaflet. */
    const antPathControl = antPath(antPathCoordinates, antPathOptions);

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
    const currentLocation = slug.value
      ? LOCATIONS.find((location) => location.slug === slug.value)
      : null;

    /** Invalidates map size. */
    function invalidateMap(): void {
      mapInstance.value?.invalidateSize();
    }

    /** Creates markers for locations. */
    async function createLocationMarker(location: Location): Promise<void> {
      const {
        coordinates: { lat, lng },
      } = location;
      const latlng: LatLngTuple = [lat, lng];
      const markerOptions: MarkerOptions = { icon: markerIcon };
      const marker = leaflet
        .marker(latlng, markerOptions)
        .bindPopup(await renderPopup(location));
      console.debug('Creating marker:', marker);
      marker.addTo(mapInstance.value as Map);
    }

    /** Handles locale changes. */
    function handleLocaleChange(): void {
      console.info('Locale change detected.');
      resetMap();
      LOCATIONS.map(createLocationMarker);
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

    /** Opens a popup for a location. */
    async function openLocationPopup(location: Location): Promise<void> {
      console.debug('Showing popup for location:', location);
      const {
        coordinates: { lat, lng },
      } = location;
      const latlng: LatLngTuple = [lat, lng];
      leaflet
        .popup()
        .setLatLng(latlng)
        .setContent(await renderPopup(location))
        .openOn(mapInstance.value as Map);
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
    function renderPopup({ slug, title }: Location): Promise<string> {
      return renderToString(
        <div class="leaflet-popup-container">
          <h2 class="leaflet-popup-title" v-html={t(title)} />
          <a class="router-link" href={`/location/${slug}`}>
            {t('moreInfo')}
          </a>
        </div>
      );
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
      Promise.all(LOCATIONS.map(createLocationMarker));

      // Invalidate map on window resize
      resizeObserver.observe(map.value.$el);

      // Handle popup events
      mapInstance.value.addEventListener('popupclose', handlePopupclose);
      mapInstance.value.addEventListener('popupopen', handlePopupopen);

      // Initialize Ant Path
      antPathControl.addTo(mapInstance.value);

      // Initialize locate feature
      mapInstance.value.addControl(
        leaflet.control.locate(locateControlOptions)
      );

      // Open popup for current location
      if (currentLocation) {
        openLocationPopup(currentLocation);
      }
    }

    /** Removes event listeners from instance. */
    function removeEventListeners(): void {
      mapInstance.value?.removeEventListener('popupclose', handlePopupclose);
      mapInstance.value?.removeEventListener('popupopen', handlePopupopen);
      resetPopupLinks();
    }

    // Initialize map on mount
    onMounted(initializeMap);

    // Remove event listeners on unmount
    onBeforeUnmount(removeEventListeners);

    // Watch for locale changes
    watch(locale, handleLocaleChange);

    return { map };
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-map" ref="map" />
        <AppFooter />
      </>
    );
  },
});
