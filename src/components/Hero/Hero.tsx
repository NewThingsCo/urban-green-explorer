import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Hero.css';

export default defineComponent({
  name: 'Hero',
  render(): VNode {
    return (
      <div class="hero">
        <div class="content">
          {this.$slots.default ? this.$slots.default() : null}
        </div>
        <div class="overlay"></div>
      </div>
    );
  },
});
