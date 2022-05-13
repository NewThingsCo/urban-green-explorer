import type { VNode } from 'vue';
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import MapMarkerAltIcon from '../../assets/icons/map-marker-alt.svg?raw';
import { locations } from '../../content/locations';
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
  mounted() {
    if (!this.$leaflet) return;
    try {
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

      locations.map((location) => {
        this.$leaflet
          .marker([location.coordinates[0], location.coordinates[1]], {
            icon: markerIcon,
          })
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
              '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="/location/parkly">More info</a></div>'
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
              '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="/location/aurora-block">More info</a></div>'
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
              '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="/location/loviseholm-park">More info</a></div>'
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
              '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="/location/green-urban-mapping">More info</a></div>'
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
              '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="/location/green-tram-stop">More info</a></div>'
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
