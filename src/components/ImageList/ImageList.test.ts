import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import Component from './ImageList';
import { i18n } from '@/utils';
import { router } from '@/router';

const emptyList: typeof Component['props'] = {
  links: [],
};

const imageLinks: typeof Component['props'] = {
  images: [
    {
      alt: 'showOnMap',
      caption: 'showOnMap',
      src: '#',
    },
  ],
};

const wrapperWithLinks = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
  },
  props: imageLinks,
});

const wrapperWithoutImages = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
  },
  props: emptyList,
});

describe(Component.name, () => {
  it('renders the component', () => {
    expect(wrapperWithLinks.exists()).toBeTruthy();
  });
  it('renders a list of images', () => {
    expect(wrapperWithLinks.findAll('.item').length).toBeTruthy();
  });
  it('list contains images', () => {
    expect(wrapperWithLinks.findAll('.image').length).toBeTruthy();
  });
  it('contains captions', () => {
    expect(wrapperWithLinks.findAll('.caption').length).toBeTruthy();
  });
  it('skips rendering categories when given an empty array', () => {
    expect(wrapperWithoutImages.findAll('.item').length).toBeFalsy();
  });
});
