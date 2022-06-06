import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import Component from './LinkList';
import { i18n } from '@/utils';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';
import { router } from '@/router';

const emptyList: typeof Component['props'] = {
  links: [],
};

const listWithLinks: typeof Component['props'] = {
  links: [
    {
      iconLeft: MapMarkedAlt,
      iconRight: MapMarkedAlt,
      title: 'showOnMap',
      to: { name: 'mapWithPopup', params: { id: 'test' } },
      type: 'router-link',
    },
  ],
};

const wrapperWithLinks = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
  },
  props: listWithLinks,
});

const wrapperWithoutLinks = mount(Component, {
  global: {
    plugins: [createTestingPinia(), i18n, router],
  },
  props: emptyList,
});

describe(Component.name, () => {
  it('renders the component', () => {
    expect(wrapperWithLinks.exists()).toBeTruthy();
  });
  it('renders a list of categories', () => {
    expect(wrapperWithLinks.findAll('.link').length).toBeTruthy();
  });
  it('categories contain icons', () => {
    expect(wrapperWithLinks.findAll('.icon').length).toBeTruthy();
  });
  it('categories contain titles', () => {
    expect(wrapperWithLinks.findAll('.title').length).toBeTruthy();
  });
  it('skips rendering categories when given an empty array', () => {
    expect(wrapperWithoutLinks.findAll('.link').length).toBeFalsy();
  });
});
