import type { LocaleCode } from '@/types';
import type { VNode } from 'vue';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { LOCALES } from '@/constants';
import TranslateIcon from '@/assets/icons/translate.svg?component';
import './LocaleSwitcher.css';

export default defineComponent({
  name: 'LocaleSwitcher',
  setup() {
    const isOpen = ref(false);
    const { locale } = useI18n();

    /** Handles locale changes and saves the value to locale storage. */
    function handleLocaleChange(
      event: Event & { target: { value?: LocaleCode } | null }
    ): void {
      event?.preventDefault();
      const localeCode = (event.target as HTMLSelectElement)
        ?.value as LocaleCode;
      locale.value = localeCode;
      if (window.localStorage) {
        window.localStorage.setItem('localeCode', localeCode);
      }
      document.querySelector('html')?.setAttribute('lang', localeCode);
    }

    /** Toggles form visibility by setting the value to `true` or `false`. */
    function toggleVisibility(): void {
      isOpen.value = !isOpen.value;
    }

    return {
      handleLocaleChange,
      isOpen,
      toggleVisibility,
    };
  },
  render(): VNode {
    return (
      <form
        class="locale-switcher"
        data-open={this.isOpen}
        title={this.$t('localeSwitcher')}
      >
        <label class="label">
          <TranslateIcon class="icon" onClick={this.toggleVisibility} />
          <select
            class="select-menu"
            onChange={this.handleLocaleChange}
            onBlur={this.toggleVisibility}
          >
            {LOCALES.map((locale) => (
              <option
                class="locale-option"
                selected={locale.code === this.$i18n.locale}
                value={locale.code}
              >
                {locale.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  },
});
