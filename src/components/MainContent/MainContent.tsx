import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import './MainContent.css';

export default defineComponent({
  name: 'MainContent',
  props: {
    id: {
      default: undefined,
      type: String,
    },
  },
  setup() {
    const classes = ['main'];
    // Add current route name to container class i.e. main-route-name
    const { currentRoute } = useRouter();
    if (currentRoute.value.name) {
      classes.push(`main-${currentRoute.value.name.toString().toLowerCase()}`);
    }
    return { classes };
  },
  render(): VNode {
    return (
      <main class={this.classes.join(' ')} id={this.id}>
        {this.$slots.default ? this.$slots.default() : null}
      </main>
    );
  },
});
