import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import LocaleSwitcher from '../LocaleSwitcher';
import './AppHeader.css';

export default defineComponent({
  name: 'AppHeader',
  render(): VNode {
    return (
      <header class="app-header">
        <h1 class="title">Urban Green Explorer</h1>
        <LocaleSwitcher />
      </header>
    );
  },
});
