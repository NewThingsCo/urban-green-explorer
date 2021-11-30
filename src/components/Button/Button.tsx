import type { ButtonHTMLAttributes, PropType, VNode } from 'vue';
import { defineComponent } from 'vue';
import './Button.css';

export default defineComponent({
  name: 'Button',
  props: {
    autofocus: {
      default: false,
      required: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      required: false,
      type: Boolean,
    },
    name: {
      default: undefined,
      required: false,
      type: String,
    },
    onClick: {
      default: (event: Event) => event,
      required: false,
      type: Function as PropType<(event?: MouseEvent) => void>,
    },
    type: {
      default: 'button',
      required: false,
      type: String as PropType<ButtonHTMLAttributes['type']>,
    },
  },
  render(): VNode {
    return (
      <button
        autofocus={this.autofocus}
        class="button"
        disabled={this.disabled}
        name={this.name}
        onClick={this.onClick}
        type={this.type}
      >
        {this.$slots.default ? this.$slots.default() : ''}
      </button>
    );
  },
});
