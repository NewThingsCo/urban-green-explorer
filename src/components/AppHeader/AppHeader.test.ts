import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './AppHeader';
import { i18n } from '@/utils';

const wrapper = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n],
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
    expect(wrapper.find('.app-header').element.childNodes.length).toEqual(2);
  });
});
