import { mount } from '@vue/test-utils';
import Component from './BackLink';
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
});
