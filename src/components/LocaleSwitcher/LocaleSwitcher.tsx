import type { VNode } from 'vue';
import type { LocaleCode } from '~/types';
import { defineComponent } from 'vue';
import { HAS_LOCAL_STORAGE, LOCALES } from '~/constants';
import LocaleSwitch from '../LocaleSwitch';
import './LocaleSwitcher.css';

export default defineComponent({
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
      if (HAS_LOCAL_STORAGE) {
        window.localStorage.setItem('localeCode', localeCode);
      }
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
