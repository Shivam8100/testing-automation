import { test, expect } from '@playwright/test';
import { TEST_WEB_URL } from '../constants';

test('test', async ({ page }) => {
  await page.goto(TEST_WEB_URL);
  await page.getByRole('link', { name: 'Flipkart', exact: true }).click();
  await expect(page.getByRole('textbox', { name: 'Search for Products, Brands' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('link', { name: 'mobile 5g in Mobiles' }).click();
  await expect(page.getByText('Filters')).toBeVisible();
});


// To write a better test, consider the following:
// For repeated actions, use a page object model or selectors to avoid hardcoding strings.
// For example, you can create a constants file for selectors and use it in your tests.
// test.beforeEach(async ({ page }) => {
//   await page.goto(TEST_WEB_URL);
// });

test.describe('Home page => Top section', () => {
  test('Should have heading', async ({ page }) => {
  await page.goto(TEST_WEB_URL);
  await page.getByRole('link', { name: 'Flipkart', exact: true }).click();
  });
});