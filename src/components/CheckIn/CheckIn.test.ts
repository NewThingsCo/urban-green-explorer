import { mount } from '@vue/test-utils';
import Component from '../CheckIn';
import { i18n } from '@/utils';

const wrapper = mount(Component, {
  global: {
    plugins: [i18n],
  },
});

describe(Component.name, () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('has a check-in button', () => {
    expect(wrapper.find('.btn').text()).toBeTruthy();
  });
  it('has no label at start', () => {
    expect(wrapper.find('.label').text()).toBeFalsy();
  });
});
