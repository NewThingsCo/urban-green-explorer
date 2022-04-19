import type { Plugin } from 'vue';
import leaflet from 'leaflet';

const plugin: Plugin = {
  install: (app, options) => {
    app.config.globalProperties.$leaflet = leaflet;
    app.provide('leaflet', options);
  },
};

export default plugin;
