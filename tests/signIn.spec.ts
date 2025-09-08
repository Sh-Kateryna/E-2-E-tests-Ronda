import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Log in with email', () => {
  test("R401 - Log in with valid 'Email' and 'Password' fields", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('shk@anadeainc.com', 'Q1234567');
    await expect(page.getByText('Homepage')).toBeVisible();
  });

  test("R402 - Log in fails with valid email and invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('shk@anadeainc.com', '1');
    await expect(page.locator('form').getByText('Invalid credentials')).toBeVisible();
  await expect(page.getByLabel('Notifications Alt+T').getByText('Invalid credentials')).toBeVisible();
  });

  test("R403 - Log in fails with unknown email and valid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('unknown@anadeainc.com', 'Q1234567');
     await expect(page.locator('form').getByText('Invalid credentials')).toBeVisible();
  await expect(page.getByLabel('Notifications Alt+T').getByText('Invalid credentials')).toBeVisible();
  });
});