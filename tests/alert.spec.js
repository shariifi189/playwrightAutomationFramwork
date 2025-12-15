import { test, expect } from '@playwright/test';

test('Alert', async ({ page }) => {

    await page.goto("https://kitchen.applitools.com/")
    // a:nth-child(1) > h3
    await page.getByRole('link', { name: 'Alert' }).click()

    page.once('dialog', dialog => {

        console.log("Alert Message : ", dialog.message())
        dialog.accept();

    })

    await page.screenshot({path: './test-results/screenShot/before-alert.png'})
    await page.locator('button#alert-button').click()
    await page.screenshot({path: './test-results/screenShot/after-alert.png'})


});

test('Confirmation Accept', async ({ page }) => {

    await page.goto("https://kitchen.applitools.com/")
    // a:nth-child(1) > h3
    await page.getByRole('link', { name: 'Alert' }).click()


    page.once('dialog', dialog => {

        console.log("confimation massage", dialog.message())
        dialog.accept();

    })

    await page.locator('button#confirm-button').click()


});

test('Confirmation dismiss', async ({ page }) => {

    await page.goto("https://kitchen.applitools.com/")
    // a:nth-child(1) > h3
    await page.getByRole('link', { name: 'Alert' }).click()

    page.once('dialog', dialog => {

        console.log("Conformation Massege", dialog.message())
        dialog.dismiss()

    })

  
    await page.locator('button#confirm-button').click()


});

test('Prompt', async ({ page }) => {

    await page.goto("https://kitchen.applitools.com/")
    // a:nth-child(1) > h3
    await page.getByRole('link', { name: 'Alert' }).click()

    page.once('dialog', dialog => {

        console.log("Prompt Message ", dialog.message());
        dialog.accept("Kabob");


    })

    await page.locator('button#prompt-button').click()

});

test('Prompt Dismiss', async ({ page }) => {

    await page.goto("https://kitchen.applitools.com/")
    // a:nth-child(1) > h3
    await page.getByRole('link', { name: 'Alert' }).click()

   page.once('dialog', dialog => {

    console.log("Pormt Message ", dialog.message());
    dialog.dismiss();

   })

    await page.locator('button#prompt-button').click()

});