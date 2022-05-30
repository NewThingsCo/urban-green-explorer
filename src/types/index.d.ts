import { locations } from '@/content/locations';
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

interface Location {
  categories: CategoryKey[];
  coordinates: Coordinates;
  description: string;
  minDistance: number;
  slug: string;
  title: string;
}

export {
  Category,
  CheckIn,
  Locale,
  location,
  Locales,
  LocaleCode,
  Location,
  Translations,
};
