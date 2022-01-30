import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createHead } from '@vueuse/head';
import { createPinia, setActivePinia } from 'pinia';
import { I18N_DEFAULT_MESSAGES } from '~/constants';
import { router } from '~/router';
import { i18n } from '~/utils';
import IndexPage from '.';

const wrapper = mount(IndexPage, {
  global: {
    plugins: [createTestingPinia(), i18n, createHead(), router],
  },
});

describe('IndexPage', () => {
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
  it('should have a counter', () => {
    expect(wrapper.findAll('.counter').length).toBe(1);
  });
  it('should have some currency examples', () => {
    expect(
      wrapper.find('.currency-examples').element.childElementCount
    ).toBeGreaterThan(1);
  });
  it('should have some datetime examples', () => {
    expect(
      wrapper.find('.datetime-examples').element.childElementCount
    ).toBeGreaterThan(1);
  });
  it('should display the correct text in the main heading', () => {
    expect(wrapper.find('.page-title').text()).toEqual(
      I18N_DEFAULT_MESSAGES.title
    );
  });
});
