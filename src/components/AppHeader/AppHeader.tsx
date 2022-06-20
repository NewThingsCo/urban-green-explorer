import type { VNode } from 'vue';
import { computed, defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Button from '../Button';
import LocaleSwitcher from '../LocaleSwitcher';
import { goBack } from '@/router';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import BGreenLogo from '@/assets/logos/b-green.svg?url';
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
            <Button
              to={{ path: '#' }}
              onClick={goBack}
              title={this.$t('backToPreviousLocation')}
            >
              <ChevronLeft class="h-4 w-4" />
              <span class="title">{this.$t('back')}</span>
            </Button>
            <div class="actions">
              <ThemeSwitcher />
              <LocaleSwitcher />
            </div>
          </header>
        );
      default:
        return (
          <header class="app-header">
            <RouterLink class="home-link" to={{ name: 'index' }}>
              <img alt="B.Green logo" class="logo" src={BGreenLogo} />
              <h2 class="title">Urban Green Explorer</h2>
            </RouterLink>
            <div class="actions">
              <ThemeSwitcher />
              <LocaleSwitcher />
            </div>
          </header>
        );
    }
  },
});
