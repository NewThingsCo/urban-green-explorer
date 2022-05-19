import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import LocaleSwitcher from '../LocaleSwitcher';
import './AppHeader.css';
import BGReenLogo from '@/assets/logos/BGreen.png';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const imgUrl = new URL(BGReenLogo, import.meta.url).href;
    return {
      imgUrl,
    };
  },
  render(): VNode {
    return (
      <header class="app-header">
        <h1 class="title flex">
          <img class="w-9 h-7" src={this.imgUrl} />
          <RouterLink class="ml-10" to={{ name: 'home' }}>
            Urban Green Explorer
          </RouterLink>
        </h1>
        <LocaleSwitcher />
      </header>
    );
  },
});
