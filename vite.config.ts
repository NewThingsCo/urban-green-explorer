import VueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import ESLintPlugin from 'vite-plugin-eslint';
import MKCert from 'vite-plugin-mkcert';
import StylelintPlugin from 'vite-plugin-stylelint';
import SVGLoader from 'vite-svg-loader';
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
    MKCert(),
    StylelintPlugin({
      cache: true,
      fix: true,
      include: ['src/**/*.css'],
    }),
    SVGLoader({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupAttrs: false,
                cleanupIDs: false,
                inlineStyles: false,
                removeUnknownsAndDefaults: false,
                removeUselessDefs: false,
                removeUselessStrokeAndFill: false,
                sortDefsChildren: false,
              },
            },
          },
          {
            name: 'sortAttrs',
            params: {
              xmlnsOrder: 'alphabetical',
            },
          },
        ],
      },
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
      config: path.resolve(__dirname, 'windi.config.ts'),
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
    https: true,
    port: parseInt(process.env.PORT || '8080'),
  },
});
