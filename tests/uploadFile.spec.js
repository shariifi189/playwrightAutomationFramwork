import {test, expect } from '@playwright/test';

test.describe('File Upload Test ', () => {
    test('Should upload a file seccessfully', async ({ page }) => {

        await page.goto("https://kitchen.applitools.com/")
       //wait expect(page.getByRole('link', { name: "The Kitche"})).toBeVisible();

        await page.getByRole('link', { name: 'File Picker' }).click();
  
      //await page.getByRole('button', { name: "Upload Recipe Picture" }).click();
        await page.setInputFiles(
            'input[type="file"]',
            'tests/fixtures/jenkins.png'
        );

        await expect(page.locator('input[type="file"]'))
    .toHaveValue(/jenkins.png/);
        await page.pause
    });
});