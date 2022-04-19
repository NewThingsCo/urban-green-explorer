import { createTestingPinia } from '@pinia/testing';
import { mount, RouterLinkStub } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { i18n } from '@/utils';
import { router, routes } from '@/router';
import Navigation from './';

const wrapper = mount(Navigation, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
});

describe('Navigation', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should have the correct amount of switches', () => {
    expect(wrapper.findAll('a').length).toEqual(routes.length);
  });
});
