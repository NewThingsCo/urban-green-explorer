import { jest } from '@jest/globals';
import { mount } from '@vue/test-utils';
import Button from './Button';

const mockCallback = jest.fn();

const props: typeof Button['props'] = {
  name: 'name',
  onClick: mockCallback,
  value: 'value',
};

const testContent = 'Unit test';

const ChildComponent = {
  name: 'Child',
  template: `<div class="child">${testContent}</div>`,
};

const wrapper = mount(Button, {
  props,
  slots: {
    default: ChildComponent,
  },
});

describe('Button', () => {
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
