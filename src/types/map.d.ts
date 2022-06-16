import type { TileLayerOptions } from 'leaflet';

interface AntPathOptions {
  color: string;
  dashArray: [number, number];
  delay: number;
  fill: boolean;
  hardwareAcceleration: boolean;
  opacity: number;
  paused: boolean;
  pulseColor: string;
  // renderer: any;
  reverse: boolean;
  // use: any;
  weight: number;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface MapTheme {
  options: TileLayerOptions;
  urlTemplate: string;
}

export { AntPathOptions, Coordinates, MapTheme };
