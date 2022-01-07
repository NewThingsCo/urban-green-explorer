import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import MainHeader from './MainHeader';
import { i18n } from '@/utils';

const wrapper = mount(MainHeader, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
});

describe('MainHeader', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('has the correct amount of children', () => {
    expect(wrapper.find('.main-header').element.childNodes.length).toEqual(2);
  });
});
