// @ts-check
import { test, expect } from '@playwright/test';
import { snapshot } from 'node:test';
import { isContext } from 'vm';

test('has title', async ({ page, context }) => {

  // this will start the traceing

await context.tracing.start(

  {
    snapshots: true,
    screenshots: true

  })

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

    await context.tracing.stop({path: 'test-ressults-trace.zip' })
});

