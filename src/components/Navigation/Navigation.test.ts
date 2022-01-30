import { RouterLinkStub, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { createPinia, setActivePinia } from 'pinia';
import { routes } from '~/router/routes';
import { i18n } from '~/utils';
import Navigation from '.';

const wrapper = mount(Navigation, {
  global: {
    plugins: [createTestingPinia(), i18n],
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
});

const wrapperWithProps = mount(Navigation, {
  global: {
    plugins: [createTestingPinia(), i18n],
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
  props: {
    routes,
  },
});

describe('Navigation', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  describe('with props', () => {
    it('renders the component', () => {
      expect(wrapperWithProps.exists()).toBeTruthy();
    });
    it('should have the correct amount of switches', () => {
      expect(wrapperWithProps.findAll('.router-link').length).toEqual(
        routes.length
      );
    });
  });
  describe('without props', () => {
    it('renders the component', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
    it("shouldn't have any switches", () => {
      expect(wrapper.findAll('.router-link').length).toEqual(0);
    });
  });
});
