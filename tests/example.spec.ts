import { test, expect } from '@playwright/test';
import * as path from 'path';


//This works fine in 1.49 but breaks in 1.50
test('check it is clicking the correct visible button', async ({ page }) => {
  //open the page.html file in playwright
  const filePath = path.resolve(__dirname, '../page.html');
  const fileUrl = `file://${filePath}`;
  page.setDefaultTimeout(2000);
  await page.goto(fileUrl);
  await page.click('data-test-id=buttonTest >> visible="true"');
});


test.skip('Now check again but scroll a bit', async ({ page }) => {
  //open the page.html file in playwright
  const filePath = path.resolve(__dirname, '../page.html');
  const fileUrl = `file://${filePath}`;
  page.setDefaultTimeout(2000);
  await page.goto(fileUrl);
  await page.click('id=scrollHere');
  await page.click('data-test-id=buttonTest >> visible="true"');
});


