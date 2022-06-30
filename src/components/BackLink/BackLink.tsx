import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';
import ChevronLeft from '@/assets/icons/chevron-left.svg?component';
import './BackLink.css';

export default defineComponent({
  name: 'BackLink',
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const backLink = computed(() => {
      switch (route.params?.from) {
        case 'index':
          return (
            <RouterLink to={{ name: 'index' }}>{t('backToStart')}</RouterLink>
          );
        default:
          return (
            <RouterLink to={{ name: 'info' }}>{t('backToInfo')}</RouterLink>
          );
      }
    });
    return { backLink };
  },
  render(): VNode {
    return (
      <p class="back-link">
        <ChevronLeft class="icon" />
        {this.backLink}
      </p>
    );
  },
});
