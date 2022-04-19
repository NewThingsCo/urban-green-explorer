import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import MainContent from '@/components/MainContent';
import MainFooter from '@/components/MainFooter';
import MainHeader from '@/components/MainHeader';
import './MapPage.css';

export default defineComponent({
  name: 'MapPage',
  mounted() {
    try {
      const map = this.$leaflet?.map('map').setView([60.1789, 24.9748], 15);
      this.$leaflet
        ?.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 25,
          tileSize: 512,
          zoomOffset: -1,
        })
        .addTo(map);
    } catch (error) {
      console.error(error);
    }
  },
  render(): VNode {
    return (
      <>
        <MainHeader />
        <MainContent class="map" id="map" ref="map" />
        <MainFooter />
      </>
    );
  },
});
