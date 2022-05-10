import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './InfoPage';
import { I18N_DEFAULT_MESSAGES } from '@/constants';
import { router } from '@/router';
import { i18n } from '@/utils';

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
  it('should have a few links', () => {
    expect(wrapper.findAll('.links a').length).toBeGreaterThan(1);
  });
  it('should display the correct text in the main heading', () => {
    expect(wrapper.find('.page-title').text()).toEqual(
      I18N_DEFAULT_MESSAGES.about.title
    );
  });
});
