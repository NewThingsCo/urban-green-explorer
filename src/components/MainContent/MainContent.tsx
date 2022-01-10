import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import './MainContent.css';

export default defineComponent({
  name: 'MainContent',
  setup() {
    const classes = ['main'];
    const { currentRoute } = useRouter();
    if (currentRoute.value.name) {
      classes.push(`main-${currentRoute.value.name.toString().toLowerCase()}`);
    }
    return { classes };
  },
  render(): VNode {
    return (
      <main class={this.classes.join(' ')}>
        {this.$slots.default ? this.$slots.default() : null}
      </main>
    );
  },
});
