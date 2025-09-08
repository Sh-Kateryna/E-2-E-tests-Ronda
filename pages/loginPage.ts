import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly forgotPasswordLink: Locator;
  readonly loginErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
    this.emailInput = page.getByRole('textbox', { name: 'Enter Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
    this.forgotPasswordLink = page.getByLabel('Forgot password?');
    this.loginErrorMessage = page.getByText('Invalid email or password.');
  };

  async goto() {
    await this.page.goto('/auth/login');
  };

  async login(email: string, password: string) {
    await this.loginButton.click();
     await this.emailInput.fill(email);
    await this.emailInput.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  };
};