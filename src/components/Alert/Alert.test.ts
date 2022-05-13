import { createTestingPinia } from '@pinia/testing';
import { mount, RouterLinkStub } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './Alert';
import { i18n } from '@/utils';
import { router } from '@/router';

const wrapper = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
});

describe(Component.name, () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
