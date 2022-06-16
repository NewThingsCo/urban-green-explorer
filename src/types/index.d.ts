import type { TileLayerOptions } from 'leaflet';
import type { FunctionalComponent, SVGAttributes } from 'vue';
import type { LocationAsRelativeRaw } from 'vue-router';
import { LOCALE_CODES } from '@/constants';
import en from '@/locales/en.json';

interface Category {
  key: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface CheckIn {
  locationSlug: string;
  visited: Date;
}

type LocaleCodes = typeof LOCALE_CODES;

type LocaleCode = LocaleCodes[number];

type Locale = {
  code: readonly LocaleCode;
  name: readonly string;
};

type Translations = typeof en;

type CategoryKey = keyof Translations['category'];

type TranslationKey = keyof Translations;

type LocationIcon = FunctionalComponent<SVGAttributes>;

type LocationLinkType = 'external' | 'panel' | 'router-link';

interface LocationLink {
  alert?: string; // Link to translation for alert
  iconLeft: LocationIcon | null;
  iconRight: LocationIcon | null;
  title: string; // Link to translation
  to: LocationAsPath | LocationAsRelativeRaw; // URL, link to translation or relative path
  type: LocationLinkType;
}

interface AdditionalContent {
  content: string;
  links: LocationLink[];
}

interface Location {
  additionalContent?: string;
  additionalLinks?: LocationLink[];
  categories: CategoryKey[];
  coordinates: Coordinates;
  description: string;
  image: string;
  images?: LocationImage[];
  links?: LocationLink[];
  minDistance: number;
  slug: string;
  subtitle: string;
  title: string;
}

interface LocationImage {
  alt: string; // Translation reference
  caption?: string; // Translation reference
  src: string;
}

interface MapTheme {
  options: TileLayerOptions;
  urlTemplate: string;
}

export {
  AdditionalContent,
  Category,
  CategoryKey,
  CheckIn,
  Locale,
  LocaleCode,
  Locales,
  Location,
  LocationImage,
  LocationLink,
  LocationLinkPanel,
  MapTheme,
  Translations,
};
