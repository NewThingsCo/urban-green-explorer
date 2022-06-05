import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import AppMain from '@/components/AppMain';

export default defineComponent({
  name: 'InfoPage',
  render(): VNode {
    return (
      <>
        <AppHeader />
        <AppMain class="main-wrapper">
          <h1 class="title page-title">{this.$t('info.title')}</h1>
        </AppMain>
        <AppFooter />
      </>
    );
  },
});
