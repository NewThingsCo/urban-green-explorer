import type { LocaleCode } from '@/types';
import { VNode, defineComponent } from 'vue';
import './LocaleSwitcher.css';
import LocaleSwitch from '../LocaleSwitch';
import { LOCALES } from '@/constants';

const LocaleSwitcher = defineComponent({
  name: 'LocaleSwitcher',
  mounted() {
    document?.documentElement?.setAttribute('lang', this.$i18n.locale);
  },
  methods: {
    handleChange(
      event: Event & { target: { value?: LocaleCode } | null }
    ): void {
      event?.preventDefault();
      const localeCode = (event.target as HTMLInputElement)
        ?.value as LocaleCode;
      this.$i18n.locale = localeCode;
      localStorage?.setItem('localeCode', localeCode);
      document.querySelector('html')?.setAttribute('lang', localeCode);
    },
  },
  render(): VNode {
    return (
      <form name="locale-switcher" title={this.$t('localeSwitcher')}>
        {LOCALES.map((locale) => (
          <LocaleSwitch
            checked={locale.code === this.$i18n.locale}
            handleChange={this.handleChange}
            label={locale.name}
            value={locale.code}
          />
        ))}
      </form>
    );
  },
});

export default LocaleSwitcher;
