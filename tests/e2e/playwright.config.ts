import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: 'list',
  projects: [
    {
      name: 'Chromium',
      testDir: './',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      testDir: './',
      use: { browserName: 'firefox' },
    },
  ],
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:4000',
    bypassCSP: false,
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'off',
    video: 'off',
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm start',
    port: 4000,
    reuseExistingServer: false,
  },
};

export default config;
