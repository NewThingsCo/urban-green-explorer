import type { PropType, VNode } from 'vue';
import type { LocaleCode } from '~/types';
import { defineComponent } from 'vue';
import { DEFAULT_LOCALE_CODE } from '~/constants';
import { defaultEventHandler, isLocale } from '~/utils';
import './LocaleSwitch.css';

export default defineComponent({
  name: 'LocaleSwitch',
  props: {
    checked: {
      default: false,
      type: Boolean as PropType<boolean | undefined>,
    },
    handleChange: {
      default: defaultEventHandler,
      required: true,
      type: Function as PropType<((event: Event) => Event | void) | undefined>,
    },
    label: {
      default: '',
      required: true,
      type: String as PropType<string>,
    },
    value: {
      default: DEFAULT_LOCALE_CODE,
      required: true,
      validator: isLocale,
      type: String as PropType<LocaleCode | string>,
    },
  },
  render(): VNode {
    return (
      <label class="locale-switch">
        <input
          checked={this.checked}
          name="locale"
          onChange={this.handleChange}
          value={this.value}
          type="radio"
        />
        <span class="text-sm label">{this.label}</span>
      </label>
    );
  },
});
