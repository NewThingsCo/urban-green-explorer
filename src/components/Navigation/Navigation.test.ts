import { RouterLinkStub, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { createPinia, setActivePinia } from 'pinia';
import Navigation from './';
import { routes } from '@/router';
import { i18n } from '@/utils';

const wrapper = mount(Navigation, {
  global: {
    plugins: [createTestingPinia(), i18n],
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
    expect(wrapper.findAll('.router-link').length).toEqual(routes.length);
  });
});
