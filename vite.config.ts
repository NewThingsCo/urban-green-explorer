import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/account/',
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  plugins: [
    vueJsx({
      mergeProps: true,
      optimize: true,
      transformOn: true,
    }),
    WindiCSS({
      scan: {
        dirs: ['.'],
        fileExtensions: ['css', 'html', 'ts', 'tsx'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './'),
    },
  },
  server: {
    port: 8080,
  },
});
