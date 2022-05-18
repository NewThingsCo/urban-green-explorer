import { jest } from '@jest/globals';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Counter from './Counter';
import { i18n } from '@/utils';

const mockCallback = jest.fn();
const wrapper = mount(Counter, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
});

describe('Counter', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('has an area to render the count', () => {
    expect(wrapper.find('.counter-value').exists());
  });
  it('should have a decrement and increment buttons', () => {
    expect(wrapper.findAll('[name="decrement"]').length).toEqual(1);
    expect(wrapper.findAll('[name="increment"]').length).toEqual(1);
  });
  it('has an area to render the stats', () => {
    expect(wrapper.find('.counter-stats').exists());
  });
  it('shows the initial count as zero', () => {
    expect(wrapper.find('.counter-value').text()).toMatch('0');
  });
  it('shows the next number as 1', () => {
    expect(wrapper.find('.count-next .value').text()).toMatch('1');
  });
  it('shows the previous number as -1', () => {
    expect(wrapper.find('.count-prev .value').text()).toMatch('-1');
  });
  it('handles submits', () => {
    wrapper.vm.handleSubmit({
      ...new Event('submit'),
      preventDefault: mockCallback,
      submitter: { ...document.createElement('button'), name: 'decrement' },
    });
    expect(mockCallback).toHaveBeenCalledTimes(1);
    wrapper.vm.handleSubmit({
      ...new Event('submit'),
      preventDefault: mockCallback,
      submitter: { ...document.createElement('button'), name: 'increment' },
    });
    expect(mockCallback).toHaveBeenCalledTimes(2);
    wrapper.vm.handleSubmit({
      ...new Event('submit'),
      preventDefault: mockCallback,
      submitter: { ...document.createElement('button'), name: 'increment' },
    });
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });
  it('handleSubmit throws when given the wrong element', () => {
    try {
      wrapper.vm.handleSubmit({
        ...new Event('submit'),
        preventDefault: mockCallback,
        submitter: { ...document.createElement('button'), name: 'unknown' },
      });
    } catch (error) {
      expect(error).toEqual(new Error('Unknown button.'));
    }
    try {
      wrapper.vm.handleSubmit({
        ...new Event('submit'),
        preventDefault: mockCallback,
        submitter: { ...document.createElement('button'), name: '' },
      });
    } catch (error) {
      expect(error).toEqual(new Error('Unknown button.'));
    }
  });
  it('handleSubmit throws when not given an event', () => {
    try {
      wrapper.vm.handleSubmit();
    } catch (error) {
      expect(error).toEqual(new Error('Unknown button.'));
    }
  });
});
