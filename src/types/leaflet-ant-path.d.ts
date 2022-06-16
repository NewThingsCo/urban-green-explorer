declare module 'leaflet-ant-path' {
  import type { AntPathOptions, Coordinates } from './map';
  import leaflet from 'leaflet';
  import { antPath } from 'leaflet-ant-path';

  function antPath(coordinates: Coordinates, options: AntPathOptions): leaflet;

  export { antPath };
}
