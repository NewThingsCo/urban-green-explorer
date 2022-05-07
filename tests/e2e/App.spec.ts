import { test } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ baseURL, page }) => {
    await page.goto(baseURL + '/', { waitUntil: 'load' });
  });

  /** i18n */
  test('language switch works as expected', async ({ page }) => {
    await page.locator('.locale-switch').first().click();
    await page.locator('.locale-switch').last().click();
  });
});
