import { jest } from '@jest/globals';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createHead } from '@vueuse/head';
import { createPinia, setActivePinia } from 'pinia';
import { router } from '~/router';
import { i18n } from '~/utils';
import App from './App';

jest.retryTimes(2);

const wrapper = mount(App, {
  global: {
    plugins: [createHead(), createTestingPinia(), i18n, router],
  },
});

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should have a footer', () => {
    expect(wrapper.find('.main-footer').exists()).toBeTruthy();
  });
  it('should have a header', () => {
    expect(wrapper.find('.main-header').exists()).toBeTruthy();
  });
  it('should have a cover image', () => {
    expect(wrapper.find('.cover-image').exists()).toBeTruthy();
  });
  it('should have a locale switcher', () => {
    expect(wrapper.find('[name="locale-switcher"]').exists()).toBeTruthy();
  });
  it('should have a main area', () => {
    expect(wrapper.find('.main-home').exists()).toBeTruthy();
  });
  it('should have a navigation', () => {
    expect(wrapper.find('.navigation').exists()).toBeTruthy();
  });
  it('main area should not be empty', () => {
    expect(
      wrapper.find('.main-home').element.childElementCount
    ).toBeGreaterThan(1);
  });
});
