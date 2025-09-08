import { Locator, Page } from '@playwright/test';


export class BasePage {
  readonly page: Page;
    readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    
  };

  /**
   * @param email default value is `vscode@example.com`
   * @param password default value is `P@ssw0rd`
   */
  // async loginAsLocum(email: string='shk@anadeainc.com', password: string='1') {
  //   await this.page.goto('/auth/login');
  //   await this.page.getByRole('textbox', { name: 'Enter Email' }).fill(email);
  //   await this.page.getByRole('textbox', { name: 'Enter Password' }).fill(password);
  //   await this.page.getByRole('button', { name: 'Sign in' }).click();
  // };
  // async loginAsPractice(email: string='shk+cl01@anadeainc.com', password: string='Q1234567') {
  //   await this.page.goto('/auth/login');
  //   await this.page.getByRole('textbox', { name: 'Enter Email' }).fill(email);
  //   await this.page.getByRole('textbox', { name: 'Enter Password' }).fill(password);
  //   await this.page.getByRole('button', { name: 'Sign in' }).click();
  // };
}