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
  iconLeft: LocationIcon | null;
  iconRight: LocationIcon | null;
  title: TranslationKey;
  to: LocationAsRelativeRaw;
  type: LocationLinkType;
}

interface Location {
  categories: CategoryKey[];
  coordinates: Coordinates;
  description: string;
  links: LocationLink[];
  image: string;
  minDistance: number;
  slug: string;
  subtitle: string;
  title: string;
}

export {
  Category,
  CheckIn,
  Locale,
  LocaleCode,
  Locales,
  Location,
  LocationLink,
  LocationLinkPanel,
  Translations,
};
