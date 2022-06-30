import { jest } from '@jest/globals';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './App';
import { i18n } from '@/utils';
import { router } from '@/router';

jest.retryTimes(2);

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
  it('should have a footer', () => {
    expect(wrapper.find('.app-footer').exists()).toBeTruthy();
  });
  it('should have a header', () => {
    expect(wrapper.find('.app-header').exists()).toBeTruthy();
  });
  it('should have a locale switcher', () => {
    expect(wrapper.find('.locale-switcher').exists()).toBeTruthy();
  });
  it('should have a main area', () => {
    expect(wrapper.find('.app-main').exists()).toBeTruthy();
  });
  it('should have a navigation', () => {
    expect(wrapper.find('.navigation').exists()).toBeTruthy();
  });
  it('main area should not be empty', () => {
    expect(wrapper.find('.app-main').element.childElementCount).toBeGreaterThan(
      1
    );
  });
});
