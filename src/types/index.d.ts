import { locations } from '../content/locations';
import { LOCALE_CODES } from '@/constants';
import en from '@/locales/en.json';

type LocaleCodes = typeof LOCALE_CODES;

type LocaleCode = LocaleCodes[number];

type Locale = {
  code: readonly LocaleCode;
  name: readonly string;
};

type Locations = typeof locations;

type Location = Locations[number];

type Translations = typeof en;

export { Locale, Locales, LocaleCode, Location, Translations };
