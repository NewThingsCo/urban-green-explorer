import { defineConfig } from 'windicss/helpers';
import AspectRatio from 'windicss/plugin/aspect-ratio';
import Filters from 'windicss/plugin/filters';
import Forms from 'windicss/plugin/forms';
import LineClamp from 'windicss/plugin/line-clamp';

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['index.html', 'src/**/*.{html,css,tsx}'],
  },
  plugins: [AspectRatio, Forms, Filters, LineClamp],
  shortcuts: {
    'outline-primary': 'outline-green-500',
    'separator-top': 'border-t-2 border-t-gray-200 dark:border-t-dark-800',
    'text-dark': 'text-dark-600 dark:text-white',
    heading: 'font-bold opacity-80 text-size-3xl',
    subtitle: 'font-semi-bold text-lg',
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
        sm: '410px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      backgroundColor: {
        secondary: '#74D1C9',
      },
      borderColor: {
        primary: 'border-green-500',
      },
      textColor: {
        primary: '#00D7A7',
        secondary: '#1A2238',
      },
    },
  },
});
