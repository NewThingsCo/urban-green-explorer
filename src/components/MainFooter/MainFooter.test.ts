import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import MainFooter from './MainFooter';
import { I18N_DEFAULT_MESSAGES } from '@/constants';
import { i18n } from '@/utils';

const wrapper = mount(MainFooter, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
});

describe('MainFooter', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('text should not be empty', () => {
    expect(wrapper.find('.text').text()).toMatch(
      I18N_DEFAULT_MESSAGES.editComponent.label
    );
  });
});
