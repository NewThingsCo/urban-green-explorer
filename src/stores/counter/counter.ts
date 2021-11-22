import { acceptHMRUpdate, defineStore } from 'pinia';

/** State of the Counter store. */
interface CounterStoreState {
  count: number;
}

/**
 * Counter store providing a count and tools to change its value.
 *
 * @example
 *
 * ```tsx
 * {
 *   setup() {
 *      const counterStore = useCounterStore();
 *      const { count, nextNumber, prevNumber } = storeToRefs(counterStore);
 *      const inc = counterStore.increment;
 *      return { count, inc, nextNumber, prevNumber };
 *   },
 *   render() {
 *     return (
 *       <form>
 *         <dl>
 *           <dt>Count is</dt>
 *           <dd>{this.count}</dd>
 *         </dl>
 *         <button onClick={this.dec} type="button">
 *           Decrement ➖
 *         </button>
 *         <button onClick={this.inc} type="button">
 *           Increment ➕
 *         </button>
 *         <dl>
 *           <dt>Next number will be:</dt>
 *           <dd>{this.nextNumber}</dd>
 *         </dl>
 *         <dl>
 *           <dt>Previous number was</dt>
 *           <dd>{this.prevNumber}</dd>
 *         </dl>
 *       </form>
 *     );
 *   },
 * }
 * ```
 */
const useCounterStore = defineStore('counter', {
  actions: {
    /** Decreases the counter value. */
    decrement(event?: MouseEvent) {
      event?.preventDefault();
      this.count--;
    },
    /** Increments the counter value. */
    increment(event?: MouseEvent) {
      event?.preventDefault();
      this.count++;
    },
  },
  getters: {
    /** Returns the next number. */
    nextNumber: (state: CounterStoreState) => state.count + 1,
    /** Returns the previous number. */
    prevNumber: (state: CounterStoreState) => state.count - 1,
  },
  /** Counter state. */
  state: (): CounterStoreState => ({ count: 0 }),
});

/** Add support for hot reload 🔥 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}

export { useCounterStore };
