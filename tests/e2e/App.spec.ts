import { expect, test } from '@playwright/test';
import { I18N_DEFAULT_MESSAGES, I18N_MESSAGES } from '../../src/constants';

test.describe('App', () => {
  test.beforeEach(async ({ baseURL, page }) => {
    await page.goto(baseURL + '/', { waitUntil: 'load' });
  });

  /** Counter */
  test('counter works as expected', async ({ page }) => {
    const $dec = page.locator('[name="decrement"]');
    const $inc = page.locator('[name="increment"]');
    await expect(page.locator('.counter-value')).toHaveText('0');
    await $dec.click();
    await expect(page.locator('.counter-value')).toHaveText('-1');
    await $inc.click();
    await expect(page.locator('.counter-value')).toHaveText('0');
    await $inc.click();
    await expect(page.locator('.counter-value')).toHaveText('1');
    await $dec.click();
    await expect(page.locator('.counter-value')).toHaveText('0');
  });

  /** Title */
  test('has the correct title', async ({ page }) => {
    const $title = page.locator('h1');
    await expect($title).toHaveText(I18N_DEFAULT_MESSAGES.title);
  });

  /** i18n */
  test('language switch works as expected', async ({ page }) => {
    await page.locator('.locale-switch').first().click();
    await expect(page.locator('h1')).toHaveText(I18N_MESSAGES['en-US'].title);
    await page.locator('.locale-switch').last().click();
    await expect(page.locator('h1')).toHaveText(I18N_MESSAGES['fi-FI'].title);
  });
});
