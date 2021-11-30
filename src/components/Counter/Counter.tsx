import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import Button from '@/components/Button';
import './Counter.css';

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
      <form class="counter">
        <dl class="count">
          <dt>Count is</dt>
          <dd>
            <span class="current-count value">{this.count}</span> <sup>*</sup>
          </dd>
        </dl>
        <p class="mt-6">
          <Button name="decrement" onClick={this.dec} type="button">
            <span class="mr-1">Decrement</span> ➖
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button name="increment" onClick={this.inc} type="button">
            <span class="mr-1">Increment</span> ➕
          </Button>
        </p>
        <p class="mt-3">
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
