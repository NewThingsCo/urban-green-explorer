import { jest } from '@jest/globals';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './MapPage';
import { i18n } from '@/utils';
import { router } from '@/router';
import { leaflet } from '@/plugins';

console.error = jest.fn();

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
  it('has children', () => {
    expect(wrapper.element.childElementCount).toEqual(3);
  });
});
