import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import MapMarkerAltIcon from '../../assets/icons/map-marker-alt.svg?raw';
import { locations } from '../../content/locations';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import AppMain from '@/components/AppMain';
import './MapPage.css';
import 'leaflet.locatecontrol';

export default defineComponent({
  name: 'MapPage',
  mounted() {
    try {
      if (!this.$leaflet) return;
      const map = this.$leaflet?.map('map').setView([60.1807, 24.9761], 16.5);
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

      const markerIcon = this.$leaflet.divIcon({
        html: MapMarkerAltIcon,
        className: '',
        iconSize: [24, 40],
        iconAnchor: [12, 40],
      });

      locations.map((location) => {
        this.$leaflet
          ?.marker([location.coordinates[0], location.coordinates[1]], {
            icon: markerIcon,
          })
          .addTo(map);
      });
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
