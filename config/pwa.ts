import type {
  DevOptions,
  ManifestOptions,
  VitePWAOptions,
} from 'vite-plugin-pwa';
import type { GenerateSWOptions } from 'workbox-build';

/**
 * Development options.
 */
const devOptions: DevOptions = {
  enabled: true,
  type: 'module',
};

/**
 * Manifest options.
 *
 * @todo Add icon(s)
 * @todo Add screenshot(s)
 * @todo Change theme colors
 */
const manifest: Partial<ManifestOptions> = {
  background_color: '#ffffff',
  categories: ['city planning', 'exploration', 'future architecture'],
  dir: 'ltr',
  lang: 'en',
  orientation: 'natural',
  related_applications: [
    {
      id: '1573262748',
      platform: 'itunes',
      url: 'https://apps.apple.com/fi/app/green-kalasatama/id1573262748',
    },
  ],
  // screenshots: [
  //   {
  //     label: '',
  //     platform: 'narrow',
  //     sizes: '',
  //     src: '',
  //     type: '',
  //   },
  // ],
  theme_color: '#42b883',
};

// const workbox: Partial<GenerateSWOptions> = {
//   cleanupOutdatedCaches: true,
//   globPatterns: ['**/*.{js,css,html}'],
//   sourcemap: true,
// };

const vitePWAOptions: Partial<VitePWAOptions> = {
  devOptions,
  filename: 'sw.ts',
  manifest,
  registerType: 'autoUpdate',
  srcDir: 'src',
  useCredentials: false,
};

export { vitePWAOptions };
