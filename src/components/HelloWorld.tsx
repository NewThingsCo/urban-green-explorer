import { defineComponent, ref } from 'vue';
import * as styles from './HelloWorld.css';

export default defineComponent({
  name: 'App',
  props: {
    msg: {
      default: '',
      required: true,
      type: String,
    },
  },
  setup() {
    const count = ref(0);
    const inc = () => count.value++;
    return { count, inc };
  },
  render() {
    return (
      <div class={styles}>
        <h1>{this.msg}</h1>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">
            VSCode
          </a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">
            Volar
          </a>
        </p>

        <p>
          See <code>README.md</code> for more information.
        </p>

        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">
            Vue 3 Docs
          </a>
        </p>
        <button type="button" onClick={this.inc}>
          count is: {this.count}
        </button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </div>
    );
  },
});
