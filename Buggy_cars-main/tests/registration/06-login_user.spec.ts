import { test, expect, Page } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test.describe.serial('Buggy cars - Login User', () => {
  let page: Page;
  const screenshotDir = path.join(__dirname, 'screenshots');

  test.beforeAll(async ({ browser }) => {
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://buggy.justtestit.org/register');
  });

    test('REG_login_user_001 - Entering the inputs in the Login, First_name, Last_name, Password, Confirm Password',async()=>{
      await page.reload();
      await page.locator('#username').fill('login_user')
      await page.waitForTimeout(2000)
      await page.locator('#firstName').fill('user_1')
      await page.waitForTimeout(2000)
      await page.locator('#lastName').fill('user_3')
      await page.waitForTimeout(2000)
      await page.locator('#password').fill('Password123')
      await page.waitForTimeout(2000)
      await page.locator('#confirmPassword').fill('Password123')
      await page.waitForTimeout(2000)    
      await page.locator("//button[text()='Register']").click()                           
      await page.screenshot({path:path.join(screenshotDir,'REG_Login_user_0168.png')})
    });

     test.afterAll(async () => {
    if(page){
      await page.close();
    }
  });
});