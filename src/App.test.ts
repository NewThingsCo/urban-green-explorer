import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import App from './App';
import { i18n } from './utils';

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia(), i18n],
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should display a cover image', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia(), i18n],
      },
    });
    expect(wrapper.find('.cover-image').isVisible()).toBeTruthy();
  });
  it('should have a footer', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia(), i18n],
      },
    });
    expect(wrapper.find('.main-footer').isVisible()).toBeTruthy();
  });
  it('should have a header', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia(), i18n],
      },
    });
    expect(wrapper.find('.main-header').isVisible()).toBeTruthy();
  });
  it('should have a main area', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia(), i18n],
      },
    });
    expect(wrapper.find('.main-header').isVisible()).toBeTruthy();
  });
});
