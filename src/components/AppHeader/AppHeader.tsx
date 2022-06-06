import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import LocaleSwitcher from '../LocaleSwitcher';
import BGreenLogo from '@/assets/logos/BGreen.png?url';
import ChevronLeft from '@/assets/icons/chevron-left.svg?component';
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
            <RouterLink class="button button-transparent home-link" to="-1">
              <ChevronLeft class="w-3 h-3 mr-1" />
              <span class="title">{this.$t('back')}</span>
            </RouterLink>
            <LocaleSwitcher />
          </header>
        );
      default:
        return (
          <header class="app-header">
            <RouterLink class="home-link" to={{ name: 'index' }}>
              <img alt="B.Green logo" class="logo" src={BGreenLogo} />
              <h2 class="title">Urban Green Explorer</h2>
            </RouterLink>
            <LocaleSwitcher />
          </header>
        );
    }
  },
});
