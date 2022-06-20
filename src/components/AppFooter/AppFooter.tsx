import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation';
import './AppFooter.css';

export default defineComponent({
  name: 'AppFooter',
  render(): VNode {
    return (
      <footer class="app-footer">
        {this.$slots.default ? this.$slots.default() : null}
        <Navigation />
      </footer>
    );
  },
});
