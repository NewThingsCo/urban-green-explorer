import type { ButtonHTMLAttributes, PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import { defaultEventHandler } from '@/utils';

export default defineComponent({
  name: 'Button',
  props: {
    autofocus: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    hidden: {
      default: false,
      type: Boolean,
    },
    name: {
      default: '',
      type: String,
    },
    onClick: {
      default: defaultEventHandler,
      type: Function as PropType<(event?: Event) => void>,
    },
    type: {
      default: 'button',
      type: String as PropType<ButtonHTMLAttributes['type']>,
    },
  },
  render(): VNode {
    return (
      <button
        autofocus={this.autofocus}
        class="btn"
        disabled={this.disabled}
        hidden={this.hidden}
        name={this.name}
        onClick={this.onClick}
        type={this.type}
      >
        {this.$slots.default ? this.$slots.default() : ''}
      </button>
    );
  },
});
