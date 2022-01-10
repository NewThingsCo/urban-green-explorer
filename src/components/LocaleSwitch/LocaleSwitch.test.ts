/* eslint-disable @typescript-eslint/ban-ts-comment */
import { jest } from '@jest/globals';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import LocaleSwitch from './LocaleSwitch';
import { LocaleSwitchProps } from '.';
import { LOCALES } from '@/constants';
import { i18n } from '@/utils';

const mockCallback = jest.fn();
const props: LocaleSwitchProps = {
  checked: false,
  // @ts-ignore Only used to test the amount of calls to this function
  handleChange: mockCallback,
  label: 'Unit test',
  value: LOCALES[0].code,
};

const wrapper = shallowMount(LocaleSwitch, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
  props,
});

describe('LocaleSwitch', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('shows the correct label', () => {
    expect(wrapper.find('.label').text()).toMatch(props.label);
  });
  it('has the the correct value', () => {
    expect(wrapper.find('input').element.getAttribute('value')).toMatch(
      props.value
    );
  });
  it('has handles changes', () => {
    wrapper.find('[name="locale"]').setValue('test');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
