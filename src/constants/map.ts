import type { LatLngExpression } from 'leaflet';
import type { MapTheme } from '@/types';

const DEFAULT_MAP_COORDINATES: LatLngExpression = [60.1807, 24.9773];

const DARK_MAP_THEME: MapTheme = {
  options: {
    attribution:
      'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    detectRetina: true,
    maxZoom: 20,
    minZoom: 8,
    tileSize: 512,
    zoomOffset: -1,
  },
  urlTemplate: 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png',
};

const LIGHT_MAP_THEME: MapTheme = {
  options: {
    attribution:
      'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    detectRetina: true,
    maxZoom: 20,
    minZoom: 8,
    tileSize: 512,
    zoomOffset: -1,
  },
  urlTemplate: 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png',
};

export { DARK_MAP_THEME, DEFAULT_MAP_COORDINATES, LIGHT_MAP_THEME };
