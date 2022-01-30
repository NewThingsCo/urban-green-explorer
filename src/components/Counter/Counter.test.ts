import { jest } from '@jest/globals';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { i18n } from '~/utils';
import { I18N_DEFAULT_MESSAGES } from '../../constants';
import Counter from '../Counter';

/** Wait time for Pinia actions. */
const WAIT_FOR_PINIA = 20;

const mockCallback = jest.fn();
const negativeWrapper = mount(Counter, {
  global: {
    plugins: [
      createTestingPinia({
        stubActions: false,
      }),
      i18n,
    ],
  },
});
const wrapper = mount(Counter, {
  global: {
    plugins: [
      createTestingPinia({
        stubActions: false,
      }),
      i18n,
    ],
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
  it('shows the correct text when number is zero', () => {
    expect(wrapper.find('.count-text').text()).toMatch(
      I18N_DEFAULT_MESSAGES.numberStatusPositive.split('|')[0].trim()
    );
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
  it('shows the correct text and value when incremented once', () => {
    wrapper.find('[name="increment"]').trigger('click');
    expect(wrapper.find('.counter-value').text()).toMatch('1');
    expect(wrapper.find('.count-text').text()).toMatch(
      I18N_DEFAULT_MESSAGES.numberStatusPositive.split('|')[1].trim()
    );
  });
  it('shows the correct text and value when incremented twice', async () => {
    wrapper.find('[name="increment"]').trigger('click');
    await new Promise(process.nextTick);
    setTimeout(() => {
      wrapper.find('[name="increment"]').trigger('click');
      expect(wrapper.find('.counter-value').text()).toMatch('2');
      expect(wrapper.find('.count-text').text()).toMatch(
        I18N_DEFAULT_MESSAGES.numberStatusPositive.split('|')[2].trim()
      );
    }, WAIT_FOR_PINIA);
  });
  it('shows the correct text and value when incremented thrice', () => {
    wrapper.find('[name="increment"]').trigger('click');
    setTimeout(() => {
      wrapper.find('[name="increment"]').trigger('click');
      setTimeout(() => {
        wrapper.find('[name="increment"]').trigger('click');
        expect(wrapper.find('.counter-value').text()).toMatch('3');
        expect(wrapper.find('.count-text').text()).toMatch(
          I18N_DEFAULT_MESSAGES.numberStatusPositive.split('|')[3].trim()
        );
      }, WAIT_FOR_PINIA);
    }, WAIT_FOR_PINIA);
  });
  it('shows the correct text and value when decremented once', () => {
    negativeWrapper.find('[name="decrement"]').trigger('click');
    setTimeout(() => {
      expect(negativeWrapper.find('.counter-value').text()).toMatch('-1');
      expect(negativeWrapper.find('.count-text').text()).toMatch(
        I18N_DEFAULT_MESSAGES.numberStatusNegative.split('|')[1].trim()
      );
    }, WAIT_FOR_PINIA);
  });
  it('shows the correct text and value when decremented twice', () => {
    negativeWrapper.find('[name="decrement"]').trigger('click');
    setTimeout(() => {
      negativeWrapper.find('[name="decrement"]').trigger('click');
      setTimeout(() => {
        expect(negativeWrapper.find('.counter-value').text()).toMatch('-2');
        expect(negativeWrapper.find('.count-text').text()).toMatch(
          I18N_DEFAULT_MESSAGES.numberStatusNegative.split('|')[2].trim()
        );
      }, WAIT_FOR_PINIA);
    }, WAIT_FOR_PINIA);
  });
  it('shows the correct text and value when decremented thrice', () => {
    negativeWrapper.find('[name="decrement"]').trigger('click');
    setTimeout(() => {
      negativeWrapper.find('[name="decrement"]').trigger('click');
      setTimeout(() => {
        negativeWrapper.find('[name="decrement"]').trigger('click');
        setTimeout(() => {
          expect(negativeWrapper.find('.counter-value').text()).toMatch('-3');
          expect(negativeWrapper.find('.count-text').text()).toMatch(
            I18N_DEFAULT_MESSAGES.numberStatusNegative.split('|')[3].trim()
          );
        }, WAIT_FOR_PINIA);
      }, WAIT_FOR_PINIA);
    }, WAIT_FOR_PINIA);
  });
  it('throws when given the wrong element', () => {
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
  it('throws when not given an event', () => {
    try {
      wrapper.vm.handleSubmit();
    } catch (error) {
      expect(error).toEqual(new Error('Unknown button.'));
    }
  });
});
