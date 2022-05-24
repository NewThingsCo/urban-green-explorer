import type {
  DevOptions,
  ManifestOptions,
  VitePWAOptions,
} from 'vite-plugin-pwa';

/**
 * Static assets that should be precached by the service worker.
 * @link https://vite-plugin-pwa.netlify.app/guide/static-assets.html
 * Icons from the manifest are precached by default.
 */
const includeAssets: VitePWAOptions['includeAssets'] = ['robots.txt'];

/**
 * Development options.
 * @link https://vite-plugin-pwa.netlify.app/guide/development.html
 */
const devOptions: DevOptions = {
  enabled: true,
  type: 'module',
};

/**
 * Manifest options.
 * @link https://developer.mozilla.org/en-US/docs/Web/Manifest
 *
 * @todo Add screenshot(s)
 * @todo Change theme colors
 */
const manifest: Partial<ManifestOptions> = {
  background_color: '#ffffff',
  categories: ['city planning', 'exploration', 'future architecture'],
  dir: 'ltr',
  icons: [
    {
      sizes: '32x32',
      src: 'favicon.ico',
      type: 'image/x-icon',
    },
    {
      sizes: '512x512',
      src: 'favicon.png',
      type: 'image/png',
    },
  ],
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

/** @todo Add service worker */
// const workbox: Partial<GenerateSWOptions> = {
//   cleanupOutdatedCaches: true,
//   globPatterns: ['**/*.{js,css,html}'],
//   sourcemap: true,
// };

const vitePWAOptions: Partial<VitePWAOptions> = {
  devOptions,
  includeAssets,
  manifest,
  registerType: 'autoUpdate',
  srcDir: 'src',
  useCredentials: false,
};

export { vitePWAOptions };
