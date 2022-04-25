import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import Navigation from '../Navigation';
import './AppFooter.css';

export default defineComponent({
  name: 'AppFooter',
  render(): VNode {
    return (
      <footer class="app-footer">
        <Navigation />
      </footer>
    );
  },
});
