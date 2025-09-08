# Copilot Instructions for E-2-E-tests-Ronda

## Project Overview

This project is an end-to-end (E2E) test suite for the Ronda web application, using Playwright with TypeScript. The tests target the staging environment at `https://app.staging.ronda.vet/`.

## Key Directories and Files

- `tests/` — Contains all Playwright test specs (e.g., `applyToShift.spec.ts`, `signIn.spec.ts`).
- `pages/` — Page Object Model (POM) classes (e.g., `loginPage.ts`, `basePage.ts`).
- `playwright.config.ts` — Playwright configuration (testDir, baseURL, timeouts, reporters, browser projects).
- `package.json` — Scripts for running tests and codegen.

## Architecture and Patterns

- **Page Object Model (POM):** All page interactions are encapsulated in classes under `pages/`. Example: `LoginPage` provides methods for login and selectors for login-related elements.
- **Test Structure:**
  - Use `test.describe` for grouping related tests.
  - Use `test.beforeEach` for login/setup steps.
  - Use Playwright's `getByRole`, `getByText`, etc., for robust selectors.
- **Base URL:** All navigation should use relative paths (e.g., `/auth/login`) since `baseURL` is set in `playwright.config.ts`.

## Developer Workflows

- **Run all tests:** `npm run test`
- **Record new tests:** `npm run codegen` (opens Playwright Codegen at the staging base URL)
- **View HTML reports:** After running tests, open `playwright-report/index.html`.
- **Add new POMs:** Place new page classes in `pages/` and import them in your specs.

## Conventions

- **Login:** Use the `LoginPage` class for all login actions. Do not duplicate login logic in test files.
- **Error Handling:** For failed login, assert on the error message: `page.getByText('Invalid email or password.')`.
- **Test Naming:** Use descriptive test names and group by feature.
- **Browser Projects:** By default, only Chromium is enabled. To test on Firefox/WebKit, uncomment in `playwright.config.ts`.

## Integration Points

- **External:** Tests run against the staging Ronda app. No other external services are integrated.
- **Artifacts:** Test results and reports are output to `test-results/` and `playwright-report/`.

## Example: Login Test

```typescript
import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login("user@example.com", "password");
await expect(page.getByText("Homepage")).toBeVisible();
```

---

If any conventions or workflows are unclear, please provide feedback so this document can be improved.
