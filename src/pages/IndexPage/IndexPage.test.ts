import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './IndexPage';
import { i18n } from '@/utils';
import { router } from '@/router';

const wrapper = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
  },
});

describe(Component.name, () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should have the correct amount of children', () => {
    expect(wrapper.element.childElementCount).toEqual(3);
  });
});
