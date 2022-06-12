import { mount } from '@vue/test-utils';
import Component from './CheckIn';
import { router } from '@/router';
import { i18n } from '@/utils';

const wrapper = mount(Component, {
  global: {
    plugins: [i18n, router],
  },
});

describe(Component.name, () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('has a check-in button', () => {
    expect(wrapper.find('.button').text()).toBeTruthy();
  });
  it('has a label', () => {
    expect(wrapper.find('.label').text()).toBeTruthy();
  });
});
