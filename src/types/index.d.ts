import { LOCALE_CODES } from '@/constants';

type LocaleCodes = typeof LOCALE_CODES;

type LocaleCode = LocaleCodes[number];

type Locale = {
  code: readonly LocaleCode;
  name: readonly string;
};

export { Locale, Locales, LocaleCode };
