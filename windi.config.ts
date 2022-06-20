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
    'bg-secondary': 'bg-[#74D1C9]',
    'border-primary': 'border-green-500',
    'outline-primary': 'outline-green-500',
    'separator-top': 'border-t-2 border-gray-200 dark:border-dark-200',
    'text-dark': 'text-dark-600 dark:text-white',
    'text-primary': 'text-green-500',
    'text-secondary': 'text-blue-800 dark:text-blue-400',
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
    },
  },
});
