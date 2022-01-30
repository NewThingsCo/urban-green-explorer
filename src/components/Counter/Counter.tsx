import type { VNode } from 'vue';
import { storeToRefs } from 'pinia';
import { computed, defineComponent } from 'vue';
import { useCounterStore } from '~/stores/counter';
import Button from '~/components/Button';
import './Counter.css';

export default defineComponent({
  name: 'Counter',
  setup() {
    const counterStore = useCounterStore();
    const { count, nextNumber, prevNumber } = storeToRefs(counterStore);
    const dec = counterStore.decrement;
    const inc = counterStore.increment;
    const isPositiveCount = computed(() => 0 < count.value);
    return { count, dec, inc, isPositiveCount, nextNumber, prevNumber };
  },
  methods: {
    handleSubmit(
      event?: Event & { submitter?: HTMLButtonElement }
    ): Error | void {
      event?.preventDefault();
      const $button = event?.submitter;
      switch ($button?.name) {
        case 'decrement':
          this.dec();
          break;
        case 'increment':
          this.inc();
          break;
        default:
          throw new Error('Unknown button.');
      }
    },
  },
  render(): VNode {
    return (
      <form class="counter" onSubmit={this.handleSubmit}>
        <dl class="count">
          <dt>{this.$t('countIsLabel')}</dt>
          <dd>
            <span class="counter-value value">{this.count}</span>
          </dd>
        </dl>
        <p class="counter-buttons">
          <Button name="decrement" type="submit">
            <span class="mr-1">{this.$t('decrementLabel')}</span> ➖
          </Button>
          <Button name="increment" type="submit">
            <span class="mr-1">{this.$t('incrementLabel')}</span> ➕
          </Button>
        </p>
        <aside class="my-6 counter-stats">
          <p class="count-text">
            {this.isPositiveCount
              ? this.$t('numberStatusPositive', this.count)
              : this.$t('numberStatusNegative', this.count)}
          </p>
          <dl class="mt-3 count count-next small">
            <dt>{this.$t('nextNumberLabel')}</dt>
            <dd class="value">{this.nextNumber}</dd>
          </dl>
          <dl class="count count-prev small">
            <dt>{this.$t('prevNumberLabel')}</dt>
            <dd class="value">{this.prevNumber}</dd>
          </dl>
        </aside>
      </form>
    );
  },
});
