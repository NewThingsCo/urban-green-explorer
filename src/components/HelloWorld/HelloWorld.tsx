import type { PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import * as styles from './HelloWorld.css';
import Counter from '@/components/Counter';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      required: true,
      type: String as PropType<string>,
    },
  },
  render(): VNode {
    return (
      <div class={styles}>
        <h1 class="title">{this.msg}</h1>
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
        <Counter />
        <p>
          Edit
          <code>components/HelloWorld.tsx</code> to test hot module replacement.
        </p>
      </div>
    );
  },
});
