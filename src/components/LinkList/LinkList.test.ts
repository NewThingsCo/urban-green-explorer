import { mount } from '@vue/test-utils';
import Component from './LinkList';
import { i18n } from '@/utils';
import MapMarkedAlt from '@/assets/icons/map-marked-alt.svg?component';

const emptyList: typeof Component['props'] = {
  links: [],
};

const listWithLinks: typeof Component['props'] = {
  links: [
    {
      icon: MapMarkedAlt,
      location: { name: 'mapWithPopup', params: { id: 'test' } },
      title: 'showOnMap',
      type: 'router-link',
    },
  ],
};

const wrapperWithLinks = mount(Component, {
  global: {
    plugins: [i18n],
  },
  props: listWithLinks,
});

const wrapperWithoutLinks = mount(Component, {
  global: {
    plugins: [i18n],
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
  it('skips rendering categories when given an empty array', () => {
    expect(wrapperWithoutLinks.findAll('.link').length).toBeFalsy();
  });
});
