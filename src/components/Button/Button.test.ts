import { jest } from '@jest/globals';
import { mount } from '@vue/test-utils';
import Component from './Button';

const mockCallback = jest.fn();

const props: typeof Component['props'] = {
  name: 'name',
  onClick: mockCallback,
  value: 'value',
};

const testContent = 'Unit test';

const ChildComponent = {
  name: 'Child',
  template: `<div class="child">${testContent}</div>`,
};

const wrapper = mount(Component, {
  props,
  slots: {
    default: ChildComponent,
  },
});

describe(Component, () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('renders children', () => {
    expect(Object.keys(wrapper.vm.$slots).length).toBeTruthy();
    expect(
      wrapper.vm.$slots?.default && wrapper.vm.$slots?.default()
    ).toBeTruthy();
    expect(wrapper.findAllComponents(ChildComponent).length).toBe(1);
  });
  it('child contains text', () => {
    expect(wrapper.find('.child').text()).toMatch(testContent);
  });
});
