import { test, expect } from '@playwright/test';
import { networkInterfaces } from 'os';

test('handling multiple tabs ', async ({ page }) => {


  await page.goto('https://kitchen.applitools.com/');  // go to url
  await page.evaluate(() => window.scrollBy(0, 260));   // scroll down 
  await page.getByRole('link', { name: 'Links' }).click()  // click the link button


  // Wait for two things to happen at the same time:
  // 1. Playwright starts listening for a new tab (popup).
  // 2. You click the link that will open that new tab.
  //
  // Promise.all ensures BOTH happen together —
  // Listening starts BEFORE the click happens.
  // When the popup opens, Playwright returns the new tab as "page1".

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'The Kitchen - Table' }).click()
  ]);

  // Now "page1" is the new browser tab.
  // We can interact inside that new tab.
  // Here we click the table cell that has the text "Onion".
  await expect(page.locator('//a[text() = "The Kitchen"]')).toHaveText('The Kitchen');
  await expect(page.locator('//a[text() = "The Kitchen"]')).toBeVisible();

  await page.bringToFront();   // Switch back to the main window/tab
  await page.goBack()  // navigate to previouse page 
  await page.evaluate(() => window.scrollTo(0, 0));   // scroll down 

  await expect(page.locator('//h1[text() = "The Kitchen"]')).toHaveText('The Kitchen');
  await expect.soft(page.locator('//h1[text() = "The Kitchen"]')).toBeVisible();
  // await expect.soft(page.locator('//h1[text() = "The Kitchen"]')).toHaveText('The Apple'); // SOFT ASSERTION WILL STILL FAIL THE TEST BUT WONT STOP EXECUTION.

})

// const page1Promise = page.waitForEvent('popup');
// await page.getByRole('link', { name: 'The Kitchen - Table' }).click();
// const page1 = await page1Promise;
// await page1.getByRole('cell', { name: 'Onion' }).click();