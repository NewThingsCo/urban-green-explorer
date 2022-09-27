import type MarkdownIt from 'markdown-it';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import ESLintPlugin from 'vite-plugin-eslint';
import Markdown, { link } from 'vite-plugin-md';
import MarkdownAnchor from 'markdown-it-anchor';
import MKCert from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';
import StylelintPlugin from 'vite-plugin-stylelint';
import WindiCSS from 'vite-plugin-windicss';
import SVGLoader from 'vite-svg-loader';
import path from 'path';
import { svgLoaderOptions, vitePWAOptions } from './config';

/**
 * Configuration for Vite
 *
 * {@link https://vitejs.dev/config/}
 */
export default defineConfig({
  base: '/',
  build: {
    minify: 'esbuild',
  },
  esbuild: {
    drop: ['console', 'debugger'],
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    minify: true,
  },
  plugins: [
    ESLintPlugin({
      cache: true,
      fix: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
    Markdown({
      headEnabled: false,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      builders: [link()],
      markdownItSetup(md: MarkdownIt) {
        md.use(MarkdownAnchor, {
          level: [2, 3],
          permalink: MarkdownAnchor.permalink.linkInsideHeader({
            ariaHidden: true,
            placement: 'before',
            renderHref: (slug) => `#${slug}`,
            symbol: '#',
          }),
          tabIndex: 0,
        });
      },
    }),
    MKCert(),
    StylelintPlugin({
      cache: true,
      fix: true,
      include: ['src/**/*.css'],
    }),
    SVGLoader(svgLoaderOptions),
    VitePWA(vitePWAOptions),
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
    Vue({
      include: [/\.md$/, /\.vue$/],
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
