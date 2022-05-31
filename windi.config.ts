import { defineConfig } from 'windicss/helpers';
import AspectRatio from 'windicss/plugin/aspect-ratio';
import Filters from 'windicss/plugin/filters';
import Forms from 'windicss/plugin/forms';
import LineClamp from 'windicss/plugin/line-clamp';
import DaisyUI from 'daisyui';

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['index.html', 'src/**/*.{html,css,tsx}'],
  },
  plugins: [AspectRatio, Forms, Filters, LineClamp, DaisyUI],
  shortcuts: {
    'heading-1': 'font-bold opacity-80 text-size-3xl',
    'text-primary': 'text-green-500',
    'text-secondary': 'text-blue-800',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Maison Neue', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      maxHeight: {
        '1/3': '33.3vh',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
});
