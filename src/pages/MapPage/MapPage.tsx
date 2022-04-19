import type { VNode } from 'vue';
import { onMounted, defineComponent } from 'vue';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';
import MainFooter from '@/components/MainFooter';
import MainHeader from '@/components/MainHeader';

export default defineComponent({
  name: 'MapPage',
  setup() {
    let map;
    onMounted(() => {
      map = leaflet.map('map').setView([60.1789, 24.9748], 15);
      leaflet
        .tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 25,
          tileSize: 512,
          zoomOffset: -1,
        })
        .addTo(map);
    });
  },
  render(): VNode {
    return (
      <>
        <MainHeader />
        <div id="map" class="map" />
        <MainFooter />
      </>
    );
  },
});
