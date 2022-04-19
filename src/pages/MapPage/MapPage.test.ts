import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './MapPage';
import { i18n } from '@/utils';
import { router } from '@/router';
import { leaflet } from '@/plugins';

const wrapper = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, leaflet, router],
  },
});

describe(Component.name, () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
