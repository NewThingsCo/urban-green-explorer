import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

export default defineComponent({
  name: 'Counter',
  setup() {
    const counterStore = useCounterStore();
    const { count, nextNumber, prevNumber } = storeToRefs(counterStore);
    const dec = counterStore.decrement;
    const inc = counterStore.increment;
    return { count, dec, inc, nextNumber, prevNumber };
  },
  render(): VNode {
    return (
      <form>
        <dl class="count">
          <dt>Count is</dt>
          <dd>
            <span class="current-count value">{this.count}</span> <sup>*</sup>
          </dd>
        </dl>
        <p>
          <button name="decrement" onClick={this.dec} type="button">
            Decrement ➖
          </button>
          &nbsp;&nbsp;&nbsp;
          <button name="increment" onClick={this.inc} type="button">
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
    );
  },
});
