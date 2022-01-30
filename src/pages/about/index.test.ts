import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createHead } from '@vueuse/head';
import { createPinia, setActivePinia } from 'pinia';
import { I18N_DEFAULT_MESSAGES } from '~/constants';
import { router } from '~/router';
import { i18n } from '~/utils';
import AboutPage from '.';

const wrapper = mount(AboutPage, {
  global: {
    plugins: [createHead(), createTestingPinia(), i18n, router],
  },
});

describe('AboutPage', () => {
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
