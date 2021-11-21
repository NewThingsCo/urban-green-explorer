import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:8080/account',
    bypassCSP: false,
    headless: true,
    ignoreHTTPSErrors: true,
    video: 'off',
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm start',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
