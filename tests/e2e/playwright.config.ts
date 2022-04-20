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
    baseURL: 'https://localhost:4000',
    bypassCSP: false,
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'off',
    video: 'off',
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm start -- --port=4000',
    port: 4000,
    reuseExistingServer: false,
  },
};

export default config;
