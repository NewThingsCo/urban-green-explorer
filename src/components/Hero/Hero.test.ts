import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './Hero';
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
  it('has the correct amount of children', () => {
    expect(wrapper.find('.hero').element.childNodes.length).toEqual(2);
  });
});
