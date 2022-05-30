import { mount } from '@vue/test-utils';
import Component from './CategoryList';
import { i18n } from '@/utils';

const emptyList: typeof Component['props'] = {
  categories: [],
};

const listWithCategories: typeof Component['props'] = {
  categories: ['category.block'],
};

const wrapperWithCategories = mount(Component, {
  global: {
    plugins: [i18n],
  },
  props: listWithCategories,
});

const wrapperWithoutCategories = mount(Component, {
  global: {
    plugins: [i18n],
  },
  props: emptyList,
});

describe(Component.name, () => {
  it('renders the component', () => {
    expect(wrapperWithCategories.exists()).toBeTruthy();
  });
  it('renders a list of categories', () => {
    expect(wrapperWithCategories.findAll('.category').length).toBeTruthy();
  });
  it('skips rendering categories when given an empty array', () => {
    expect(wrapperWithoutCategories.findAll('.category').length).toBeFalsy();
  });
});
