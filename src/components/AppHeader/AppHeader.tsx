import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import ChevronLeft from '@/assets/icons/chevron-left.svg?component';
import BGreenLogo from '@/assets/logos/b-green.svg?component';
import Button from '@/components/Button';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { goBack } from '@/router';
import './AppHeader.css';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const route = useRoute();
    const headerType = computed(() => {
      switch (route.name) {
        case 'mapWithPopup':
          return route.params.id ? 'back-link' : '';
        default:
          return '';
      }
    });
    return { headerType };
  },
  render(): VNode {
    switch (this.headerType) {
      case 'back-link':
        return (
          <header class="app-header">
            <Button to={{ path: '#' }} onClick={goBack} type="button">
              <ChevronLeft class="h-4 w-4" />
              <span class="title">{this.$t('back')}</span>
            </Button>
            <LocaleSwitcher />
          </header>
        );
      default:
        return (
          <header class="app-header">
            <RouterLink class="home-link" to={{ name: 'index' }}>
              <BGreenLogo aria-hidden="true" class="logo" />
              <h2 class="title">Urban Green Explorer</h2>
            </RouterLink>
            <LocaleSwitcher />
          </header>
        );
    }
  },
});
