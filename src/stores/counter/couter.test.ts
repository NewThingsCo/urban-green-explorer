import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from './counter';

describe('Counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('decrements', () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.decrement();
    expect(counter.count).toBe(-1);
  });

  it('increments', () => {
    const counter = useCounterStore();
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it('works as expected', () => {
    const counter = useCounterStore();
    counter.decrement();
    expect(counter.count).toBe(-1);
    counter.increment();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
    counter.decrement();
    expect(counter.count).toBe(0);
  });
});
