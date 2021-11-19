import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

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
  ],
  server: {
    port: 8080,
  },
});
