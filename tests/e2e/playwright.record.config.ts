import { PlaywrightTestConfig } from '@playwright/test';
import baseConfig from './playwright.config';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  use: {
    ...baseConfig.use,
    video: 'retain-on-failure',
  },
};

export default config;
