import VueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import StylelintPlugin from 'vite-plugin-stylelint';
import ESLintPlugin from 'vite-plugin-eslint';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import Pages from 'vite-plugin-pages';
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
    Pages({
      dirs: 'src/pages',
      extensions: ['tsx'],
      resolver: 'vue',
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
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
  },
  ssgOptions: {
    dirStyle: 'nested',
    entry: 'src/main.ts',
    format: 'esm',
    formatting: 'prettify',
    script: 'async',
  },
});
