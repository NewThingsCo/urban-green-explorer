import { mount } from '@vue/test-utils';
import Component from './FeedbackThanks';

const wrapper = mount(Component);

describe(Component.name, () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
