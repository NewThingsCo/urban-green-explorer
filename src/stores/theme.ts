import type { ColorScheme } from '../types';
import { defineStore } from 'pinia';

const useTheme = defineStore('theme', {
  state: () => {
    return {
      colorScheme: '' as ColorScheme,
    };
  },
});

export default useTheme;
