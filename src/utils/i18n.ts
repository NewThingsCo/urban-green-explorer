import type { I18nOptions } from 'vue-i18n/';
import { createI18n } from 'vue-i18n';
import {
  DATE_TIME_FORMATS,
  DEFAULT_LOCALE_CODE,
  FALLBACK_LOCALE,
  I18N_MESSAGES,
  LOCALE_CODES,
  NUMBER_FORMATS,
} from '../constants';

const i18nOptions: I18nOptions = {
  datetimeFormats: DATE_TIME_FORMATS,
  fallbackLocale: FALLBACK_LOCALE,
  fallbackWarn: false,
  globalInjection: true,
  legacy: false,
  locale: DEFAULT_LOCALE_CODE,
  messages: I18N_MESSAGES,
  missingWarn: false,
  numberFormats: NUMBER_FORMATS,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
};

const i18n = createI18n(i18nOptions);

/* eslint-disable @typescript-eslint/no-explicit-any */
function isLocale(locale?: any): boolean {
  return !!(locale && LOCALE_CODES.includes(locale));
}

export { i18n, isLocale };
