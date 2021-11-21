import { test, expect } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ baseURL, page }) => {
    console.log('Going to', baseURL + '/');
    await page.goto(baseURL + '/');
  });

  /** Counter */
  test('counter works as expected', async ({ page }) => {
    const $dec = page.locator('[name="decrement"]');
    const $inc = page.locator('[name="increment"]');
    await expect(page.locator('.current-count')).toHaveText('0');
    $dec.click();
    await expect(page.locator('.current-count')).toHaveText('-1');
    $inc.click();
    await expect(page.locator('.current-count')).toHaveText('0');
    $inc.click();
    await expect(page.locator('.current-count')).toHaveText('1');
    $dec.click();
    await expect(page.locator('.current-count')).toHaveText('0');
  });

  /** Title */
  test('has the correct title', async ({ page }) => {
    const $title = page.locator('h1');
    await expect($title).toHaveText('Hello Vue 3 + TypeScript + Vite');
  });

  /** Snapshot */
  test('matches snapshot', async ({ page }) => {
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('app.png');
  });
});
