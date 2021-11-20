import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
  },
};
export default config;
