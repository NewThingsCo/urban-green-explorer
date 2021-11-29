import colors from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';
import AspectRatio from 'windicss/plugin/aspect-ratio';
import Filters from 'windicss/plugin/filters';
import Forms from 'windicss/plugin/forms';
import LineClamp from 'windicss/plugin/line-clamp';
import Typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  plugins: [AspectRatio, Forms, Filters, LineClamp, Typography],
  shortcuts: {
    button:
      'bg-green-500 hover:bg-green-700 font-semibold py-4 px-8 rounded-lg text-light-100 text-opacity-90',
    code: 'bg-gray-200 py-0.5 px-2 rounded-md text-gray-600',
    figure: 'm-0 p-0 text-center w-full',
    list: 'flex list-none p-0 w-full',
  },
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
        gray: colors.coolGray,
        pink: colors.fuchsia,
        red: colors.rose,
      },
      fontFamily: {
        sans: ['Maison Neue', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
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
