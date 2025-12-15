
 import { test, expect } from '@playwright/test';

test('login feature ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('error_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

});

test('add to cart ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('error_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
 

});


test('remove from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 

 
  await page.locator('[data-test="username"]').click();
  await page.waitForTimeout(5000);
  await page.locator('[data-test="username"]').fill('error_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

});

