import type { LocaleMessageArray } from 'vue-i18n';
import { LOCALE_CODES } from '@/constants';
import fi_FI from '@/locales/fi-FI.json';

interface I18nImage {
  alt: string;
  caption: string;
}

interface I18nLocation {
  additionalContent: string;
  additionalLinks: LocaleMessageArray<I18nAdditionalLink>;
  description: string;
  images: LocaleMessageArray<I18nImage>;
  subtitle: string;
  title: string;
}

interface I18nAdditionalLink {
  alert: string;
  href: string;
  label: string;
}

type LocaleCodes = typeof LOCALE_CODES;

type LocaleCode = LocaleCodes[number];

type Locale = {
  code: readonly LocaleCode;
  name: readonly string;
};

type RawTranslations = typeof fi_FI;

type CategoryKey = keyof Translations['category'];

interface I18nInfo {
  subtitle: string;
  title: string;
}

type I18nTranslations = Omit<RawTranslations, 'info', 'locations'> & {
  info: I18nInfo;
  locations: { [name: string]: I18nLocation };
};

interface I18nLocaleMessages {
  [name: LocaleCode]: I18nTranslations;
}

type TranslationKey = keyof Translations;

export {
  CategoryKey,
  I18nAdditionalLink,
  I18nLocaleMessages,
  I18nLocation,
  I18nLocations,
  I18nTranslations,
  Locale,
  Locales,
  LocaleCode,
  LocaleCodes,
  TranslationKey,
};
