import type { PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import LocaleSwitcher from '../LocaleSwitcher';
import { defaultEventHandler } from '@/utils';
import './AppHeader.css';
import BGReenLogo from '@/assets/logos/BGreen.png?url';

export default defineComponent({
  name: 'AppHeader',
  props: {
    onClick: {
      default: defaultEventHandler,
      type: Function as PropType<(event?: Event) => void>,
    },
  },
  render(): VNode {
    return (
      <header class="app-header">
        <h1 class="title flex">
          <img class="w-9 h-7" src={BGReenLogo} />
          <RouterLink class="ml-10" to={{ name: 'home' }}>
            Urban Green Explorer
          </RouterLink>
        </h1>
        <LocaleSwitcher />
      </header>
    );
  },
});
