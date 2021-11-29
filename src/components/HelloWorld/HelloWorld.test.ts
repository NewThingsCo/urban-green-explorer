import { setActivePinia, createPinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';

import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('should display the correct text in the main heading', () => {
    const title = 'Hello from Jest';
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: { title },
    });
    expect(wrapper.find('.title').text()).toEqual(title);
  });
});
