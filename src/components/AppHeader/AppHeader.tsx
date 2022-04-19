import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import LocaleSwitcher from '../LocaleSwitcher';
import './AppHeader.css';

export default defineComponent({
  name: 'AppHeader',
  render(): VNode {
    return (
      <header class="app-header">
        <h1 class="title">
          <a href={this.$t('homePath')}>Urban Green Explorer</a>
        </h1>
        <LocaleSwitcher />
      </header>
    );
  },
});
