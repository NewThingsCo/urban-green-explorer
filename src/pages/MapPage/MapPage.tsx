import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import AppMain from '@/components/AppMain';
import './MapPage.css';
import 'leaflet.locatecontrol';

export default defineComponent({
  name: 'MapPage',
  mounted() {
    try {
      const map = this.$leaflet?.map('map').setView([60.1805, 24.9769], 16.5);
      this.$leaflet?.control
        .locate({
          position: 'topleft',
          icon: 'leaflet-control-locate-location-arrow',
        })
        .addTo(map);
      this.$leaflet
        ?.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 30,
          tileSize: 512,
          zoomOffset: -1,
        })
        .addTo(map);

      // TODO: Check if coordinates are correct
      const locations = [
        // PARKLY
        [60.18108, 24.9786],
        // LOVISEPARK
        [60.181, 24.9766],
        // AURORABLOCK
        [60.1806, 24.978],
        // URBANGREEN
        [60.1819, 24.9783],
        // TRAMSTOP
        [60.1817, 24.9793],
      ];

      const markerIcon = this.$leaflet?.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
`,
        className: '',
        iconSize: [24, 40],
        iconAnchor: [12, 40],
      });

      locations.map(([lat, lng]) => {
        this.$leaflet?.marker([lat, lng], { icon: markerIcon }).addTo(map);
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
