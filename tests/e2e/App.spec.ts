import { expect, test } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ baseURL, page }) => {
    await page.goto(baseURL + '/', { waitUntil: 'load' });
  });

  /** i18n */
  test('has a language switcher', async ({ page }) => {
    expect(await page.locator('.locale-switcher').count()).toBe(1);
  });
});
