import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './AppMain.css';

export default defineComponent({
  name: 'AppMain',
  props: {
    id: {
      default: undefined,
      type: String,
    },
  },
  render(): VNode {
    return (
      <main class="app-main" id={this.id}>
        {this.$slots.default ? this.$slots.default() : null}
      </main>
    );
  },
});
