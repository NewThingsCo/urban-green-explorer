import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import MainHome from './MainHome';
import { I18N_DEFAULT_MESSAGES } from '@/constants';
import { i18n } from '@/utils';

const wrapper = mount(MainHome, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
});

describe('MainHome', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('has a counter', () => {
    expect(wrapper.find('.counter').exists()).toBeTruthy();
  });
  it('should display the correct text in the main heading', () => {
    expect(wrapper.find('.title').text()).toEqual(I18N_DEFAULT_MESSAGES.title);
  });
});
