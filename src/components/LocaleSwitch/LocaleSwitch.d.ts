import { LocaleCode } from '@/types';

interface LocaleSwitchProps {
  checked: boolean;
  handleChange: (event: Event) => Event | void;
  label: string;
  value: LocaleCode;
}

export { LocaleSwitchProps };
