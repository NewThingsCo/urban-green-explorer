import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import LocaleSwitcher from '../LocaleSwitcher';
import './AppHeader.css';
import BGreenLogo from '@/assets/logos/BGreen.png?url';
import { goBack } from '@/router';
import Button from '@/components/Button';
import ChevronLeft from '@/assets/icons/chevron-left.svg?component';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  render(): VNode {
    if ('map' !== this.router.currentRoute.value.name) {
      return (
        <header class="app-header">
          <RouterLink class="home-link" to={{ name: 'home' }}>
            <img alt="B.Green logo" class="logo" src={BGreenLogo} />
            <h2 class="title">Urban Green Explorer</h2>
          </RouterLink>
          <LocaleSwitcher />
        </header>
      );
    } else {
      return (
        <header class="app-header">
          <Button
            class="my-5 text-black bg-white border-none font-semibold cursor-pointer hover:bg-white"
            onClick={goBack}
            type="submit"
          >
            <ChevronLeft class="w-3 h-3 mr-1" />
            {this.$t('back')}
          </Button>
          <LocaleSwitcher />
        </header>
      );
    }
  },
});
