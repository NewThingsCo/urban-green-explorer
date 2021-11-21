import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: 'list',
  projects: [
    {
      expect: {
        toMatchSnapshot: { threshold: 0.2 },
      },
      name: 'Client',
    },
  ],
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:8080',
    bypassCSP: false,
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'off',
    video: 'off',
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm start',
    port: 8080,
    reuseExistingServer: false,
  },
};

export default config;
