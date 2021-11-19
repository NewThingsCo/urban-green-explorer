import type { PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import * as styles from './HelloWorld.css';
import { useCounterStore } from '@/stores/counter';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      default: '',
      required: true,
      type: String as PropType<string>,
    },
  },
  setup() {
    const counterStore = useCounterStore();
    const { count, nextNumber, prevNumber } = storeToRefs(counterStore);
    const dec = counterStore.decrement;
    const inc = counterStore.increment;
    return { count, dec, inc, nextNumber, prevNumber };
  },
  render(): VNode {
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
          See{' '}
          <a
            href="https://github.com/NewThingsCo/contentful-vue/blob/main/README.md"
            target="_blank"
            rel="external"
          >
            <code>README.md</code>
          </a>{' '}
          for more information.
        </p>
        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>
          &nbsp;|&nbsp;
          <a href="https://v3.vuejs.org/" target="_blank">
            Vue 3 Docs
          </a>
        </p>
        <form>
          <dl class="count">
            <dt>Count is</dt>
            <dd>
              <span class="value">{this.count}</span> <sup>*</sup>
            </dd>
          </dl>
          <p>
            <button type="button" onClick={this.dec}>
              Decrement ➖
            </button>
            &nbsp;&nbsp;&nbsp;
            <button type="button" onClick={this.inc}>
              Increment ➕
            </button>
          </p>
          <p>
            <small>
              <sup>*</sup>
              <dl class="count small">
                <dt>Next number will be:</dt>
                <dd class="value">{this.nextNumber}</dd>
              </dl>
              <dl class="count small">
                <dt>Previous number was:</dt>
                <dd class="value">{this.prevNumber}</dd>
              </dl>
            </small>
          </p>
        </form>
        <p>
          Edit
          <code>components/HelloWorld.tsx</code> to test hot module replacement.
        </p>
      </div>
    );
  },
});
