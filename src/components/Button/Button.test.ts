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

const wrapper = mount(Button);

const wrapperWithChildrenAndProps = mount(Button, {
  props,
  slots: {
    default: ChildComponent,
  },
});

describe('Button', () => {
  describe('with children and props', () => {
    it('renders the component', () => {
      expect(wrapperWithChildrenAndProps.exists()).toBeTruthy();
    });
    it('renders children', () => {
      expect(
        Object.keys(wrapperWithChildrenAndProps.vm.$slots).length
      ).toBeTruthy();
      expect(
        wrapperWithChildrenAndProps.vm.$slots?.default &&
          wrapperWithChildrenAndProps.vm.$slots?.default()
      ).toBeTruthy();
      expect(
        wrapperWithChildrenAndProps.findAllComponents(ChildComponent).length
      ).toBe(1);
    });
    it('child contains text', () => {
      expect(wrapperWithChildrenAndProps.find('.child').text()).toMatch(
        testContent
      );
    });
  });
  describe('without children', () => {
    it('renders the component', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
    it("doesn't render children", () => {
      expect(Object.keys(wrapper.vm.$slots).length).toBeFalsy();
      expect(
        wrapper.vm.$slots?.default && wrapper.vm.$slots?.default()
      ).toBeFalsy();
      expect(wrapper.findAllComponents('*').length).toBe(0);
    });
  });
});
