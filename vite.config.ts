import VueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import StylelintPlugin from 'vite-plugin-stylelint';
import ESLintPlugin from 'vite-plugin-eslint';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import path from 'path';

/**
 * Configuration for Vite
 *
 * {@link https://vitejs.dev/config/}
 */
export default defineConfig({
  base: '/',
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  plugins: [
    ESLintPlugin({
      cache: true,
      fix: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
    StylelintPlugin({
      cache: true,
      fix: true,
    }),
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
    VueJsx({
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
