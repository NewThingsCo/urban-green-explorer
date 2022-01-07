import type { LocaleCode } from '@/types';
import type { DOMWrapper } from '@vue/test-utils';
import { jest } from '@jest/globals';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import LocaleSwitcher from './LocaleSwitcher';
import { i18n } from '@/utils';
import { LOCALES } from '@/constants';

const mockCallback = jest.fn();

let localeCode: LocaleCode = 'en-US';

const wrapper = mount(LocaleSwitcher, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
});

describe('LocaleSwitcher', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should have the correct amount of switches', () => {
    expect(wrapper.findAll('.locale-switch').length).toEqual(LOCALES.length);
  });
  it('switches are all different', () => {
    const $switches: DOMWrapper<HTMLLabelElement>[] =
      wrapper.findAll('.locale-switch');
    const names: string[] = $switches.map(($switch) => $switch.text());
    const filterDuplicates = new Set(names);
    expect(names.length === filterDuplicates.size).toBeTruthy();
  });
  it('switches languages', () => {
    wrapper.vm.handleChange({
      ...new Event('change'),
      preventDefault: mockCallback,
      target: { ...new EventTarget(), value: localeCode },
    });
    expect(wrapper.vm.$i18n.locale).toMatch(localeCode);
    localeCode = 'fi-FI';
    wrapper.vm.handleChange({
      ...new Event('change'),
      preventDefault: mockCallback,
      target: { ...new EventTarget(), value: localeCode },
    });
    expect(wrapper.vm.$i18n.locale).toMatch(localeCode);
    expect(mockCallback).toBeCalledTimes(2);
    expect(localeCode === document.documentElement.getAttribute('lang'));
  });
});
