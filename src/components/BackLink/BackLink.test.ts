import { mount } from '@vue/test-utils';
import Component from './BackLink';

const wrapper = mount(Component);

describe(Component.name, () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
