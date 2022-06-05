import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './InfoPage';
import { i18n } from '@/utils';
import { router } from '@/router';
import { I18N_DEFAULT_MESSAGES } from '@/constants';

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
  it('should display the correct text in the main heading', () => {
    expect(wrapper.find('.page-title').text()).toEqual(
      I18N_DEFAULT_MESSAGES.info.title
    );
  });
});
