import type { ButtonHTMLAttributes } from 'vue';

interface ButtonProps extends ButtonHTMLAttributes {
  onClick?: (event: Event) => Event | void;
}

export { ButtonProps };
