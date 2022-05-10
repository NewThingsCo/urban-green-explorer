import type { VNode } from 'vue';
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
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
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
`,
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
      if ('parkly' === this.id) {
        this.$leaflet
          .popup()
          .setLatLng([locations[0].coordinates[0], locations[0].coordinates[1]])
          .setContent(
            '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="https://localhost:8080/location/parkly">More info</a></div>'
          )
          .openOn(map);
      } else if ('aurorablock' === this.id) {
        this.$leaflet
          .popup()
          .setLatLng([locations[1].coordinates[0], locations[1].coordinates[1]])
          .setContent(
            '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="https://localhost:8080/location/aurorablock">More info</a></div>'
          )
          .openOn(map);
      } else if ('loviseholmpark' === this.id) {
        this.$leaflet
          .popup()
          .setLatLng([locations[2].coordinates[0], locations[2].coordinates[1]])
          .setContent(
            '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="https://localhost:8080/location/loviseholmpark">More info</a></div>'
          )
          .openOn(map);
      } else if ('urbangreenmapping' === this.id) {
        this.$leaflet
          .popup()
          .setLatLng([locations[3].coordinates[0], locations[3].coordinates[1]])
          .setContent(
            '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="https://localhost:8080/location/urbangreenmapping">More info</a></div>'
          )
          .openOn(map);
      } else if ('urbangreentram' === this.id) {
        this.$leaflet
          .popup()
          .setLatLng([locations[4].coordinates[0], locations[4].coordinates[1]])
          .setContent(
            '<div class="flex flex-col"><div>Location name</div> <a class="text-center" href="https://localhost:8080/location/urbangreenmapping">More info</a></div>'
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
