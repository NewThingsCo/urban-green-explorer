import { mount } from '@vue/test-utils';
import Component from './FeedbackThanks';
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
});
