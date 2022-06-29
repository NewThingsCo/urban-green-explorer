import type { OptimizeOptions } from 'svgo';

/** Custom interface to make the code more readable. */
interface SVGLoaderOptions {
  defaultImport?: 'component' | 'raw' | 'url';
  svgo?: boolean;
  svgoConfig?: OptimizeOptions;
}

/**
 * Configuration for SVG Optimizer.
 * @link https://github.com/svg/svgo
 */
const svgoConfig: OptimizeOptions = {
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
  ],
};

/**
 * Options for the `vite-svg-loader` plugin.
 * @link https://www.npmjs.com/package/vite-svg-loader
 */
const svgLoaderOptions: SVGLoaderOptions = {
  svgoConfig,
};

export { svgLoaderOptions };
