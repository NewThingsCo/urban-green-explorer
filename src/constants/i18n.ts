import type { Locale, LocaleCode } from '@/types';
import type {
  FallbackLocale,
  I18nOptions,
  IntlDateTimeFormats,
  IntlNumberFormats,
} from 'vue-i18n';
import en from '@/locales/en.json';
import fi_FI from '@/locales/fi-FI.json';

const DATE_TIME_FORMATS: IntlDateTimeFormats = {
  'en-US': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      day: '2-digit',
      hour: '2-digit',
      hour12: true,
      minute: '2-digit',
      month: '2-digit',
      second: '2-digit',
      weekday: 'short',
      year: 'numeric',
    },
  },
  'fi-FI': {
    short: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
    long: {
      day: 'numeric',
      hour: 'numeric',
      hour12: false,
      minute: 'numeric',
      month: 'long',
      second: 'numeric',
      weekday: 'long',
      year: 'numeric',
    },
  },
};

const DEFAULT_LOCALE: Locale = {
  code: 'fi-FI',
  name: 'English',
};

const DEFAULT_LOCALE_CODE: LocaleCode =
  'undefined' !== typeof window
    ? (window.localStorage?.getItem('localeCode') as LocaleCode) ||
      DEFAULT_LOCALE.code
    : DEFAULT_LOCALE.code;

const I18N_MESSAGES: I18nOptions['messages'] & { [name: string]: typeof en } = {
  'en-US': en,
  'fi-FI': fi_FI,
};

const I18N_DEFAULT_MESSAGES = I18N_MESSAGES[DEFAULT_LOCALE_CODE];

const LOCALE_CODES = ['en-US', 'fi-FI'] as const;

const LOCALES: Locale[] = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fi-FI',
    name: 'Suomi',
  },
];

const FALLBACK_LOCALE: FallbackLocale = {
  default: [DEFAULT_LOCALE.code],
  en: ['en-US'],
  fi: ['fi-FI'],
};

const NUMBER_FORMATS: IntlNumberFormats = {
  'en-US': {
    currency: {
      currency: 'USD',
      style: 'currency',
    },
    currencyNoCents: {
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      style: 'currency',
    },
  },
  'fi-FI': {
    currency: {
      currency: 'EUR',
      style: 'currency',
    },
    currencyNoCents: {
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      style: 'currency',
    },
  },
};

export {
  DATE_TIME_FORMATS,
  DEFAULT_LOCALE_CODE,
  DEFAULT_LOCALE,
  FALLBACK_LOCALE,
  I18N_DEFAULT_MESSAGES,
  I18N_MESSAGES,
  LOCALE_CODES,
  LOCALES,
  NUMBER_FORMATS,
};
