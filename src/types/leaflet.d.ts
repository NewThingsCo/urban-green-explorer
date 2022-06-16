declare module '@vue/runtime-core' {
  import leaflet from 'leaflet';

  interface ComponentCustomProperties {
    $leaflet: typeof leaflet;
  }
}

export {};
