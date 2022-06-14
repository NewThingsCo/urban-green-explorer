import type { ButtonHTMLAttributes, PropType, VNode } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { defaultEventHandler } from '@/utils';
import './Button.css';

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
    to: {
      default: null,
      type: Object as PropType<RouteLocationRaw>,
    },
    type: {
      default: 'button',
      type: String as PropType<ButtonHTMLAttributes['type'] | 'router-link'>,
    },
  },
  render(): VNode {
    switch (this.type) {
      case 'router-link':
        return (
          <RouterLink class="button" to={this.to}>
            {this.$slots.default ? this.$slots.default() : ''}
          </RouterLink>
        );
      default:
        return (
          <button
            autofocus={this.autofocus}
            class="button"
            disabled={this.disabled}
            hidden={this.hidden}
            name={this.name}
            onClick={this.onClick}
            type={this.type}
          >
            {this.$slots.default ? this.$slots.default() : ''}
          </button>
        );
    }
  },
});
