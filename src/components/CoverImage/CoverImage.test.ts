import { mount } from '@vue/test-utils';
import CoverImage from './CoverImage';

const props: typeof CoverImage['props'] = {
  alt: 'alt',
  src: 'http://localhost:8080/test.jpg',
};

const wrapper = mount(CoverImage, {
  props,
});

describe('CoverImage', () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('renders an image', () => {
    expect(wrapper.find('img').exists()).toBeTruthy();
  });
  it('image contains the right alt text', () => {
    expect(wrapper.find('img')?.element.alt).toEqual(props.alt);
  });
  it('image contains the source', () => {
    expect(wrapper.find('img')?.element.src).toEqual(props.src);
  });
});
