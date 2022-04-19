import leaflet from 'leaflet';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $leaflet: typeof leaflet;
  }
}

export {};
