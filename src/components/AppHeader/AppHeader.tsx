import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import LocaleSwitcher from '../LocaleSwitcher';
import './AppHeader.css';
import { routes } from '@/router';

export default defineComponent({
  name: 'AppHeader',
  render(): VNode {
    return (
      <header class="app-header">
        <h1 class="title">
          <RouterLink to={{ name: 'home' }}>Urban Green Explorer</RouterLink>
        </h1>
        <LocaleSwitcher />
      </header>
    );
  },
});
