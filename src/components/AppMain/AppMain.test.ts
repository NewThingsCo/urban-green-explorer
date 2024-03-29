import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Component from './AppMain';
import { i18n } from '@/utils';
import { router } from '@/router';

const testContent = 'Unit test';

const ChildComponent = {
  name: 'Child',
  template: `<div class="child">${testContent}</div>`,
};

const wrapper = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
  },
});

const wrapperWithChild = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
  },
  slots: {
    default: ChildComponent,
  },
});

describe(Component.name, () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should contain one main class when not inside the router', () => {
    expect(wrapper.classes.length).toBe(1);
  });
  it('should be empty if not given a child component', () => {
    expect(wrapper.findAll('*').length).toEqual(1);
    expect(wrapper.findAll('*').at(0)?.element.outerHTML).toMatch(
      '<main class="app-main"><!----></main>'
    );
  });
  it('should contain elements when given a child component', () => {
    expect(wrapperWithChild.findAll('*').length).toBeTruthy();
  });
  it('child component should contain the correct text', () => {
    expect(wrapperWithChild.find('.child').text()).toMatch(testContent);
  });
});
