/* eslint-disable  no-irregular-whitespace */
import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import TermsOfUseEnglish from '@/content/TERMS_OF_USE_EN.md';
import TermsOfUseFinnish from '@/content/TERMS_OF_USE_FI.md';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';
import BackLink from '@/components/BackLink';
import './TermsPage.css';

export default defineComponent({
  name: 'TermsPage',
  setup() {
    const { locale } = useI18n();
    const terms = computed(() => {
      switch (locale.value) {
        case 'en-US':
        case 'en':
          return TermsOfUseEnglish;
        default:
          return TermsOfUseFinnish;
      }
    });
    return { terms };
  },
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-terms main-wrapper">
          <BackLink />
          {this.terms.render ? this.terms.render() : null}
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
