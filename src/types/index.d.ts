import type { RouteRecordRaw } from 'vue-router';
import { LOCALE_CODES } from '~/constants';

type LocaleCodes = typeof LOCALE_CODES;

type LocaleCode = LocaleCodes[number];

type Locale = {
  code: readonly LocaleCode;
  name: readonly string;
};

type Routes = RouteRecordRaw[];

export { Locale, Locales, LocaleCode, Routes };
