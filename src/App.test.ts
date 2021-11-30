import { setActivePinia, createPinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';

import { mount } from '@vue/test-utils';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('should display a logo', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(wrapper.find('.cover-image').isVisible()).toBe(true);
  });
});
