import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000");
  await page.locator("input[name='email']").fill("foobar@eg.com");
  await page.locator("input[name='password']").fill("foobar");
  await page.locator("button[type='submit']").click();
  await page.locator("button:has-text('Logout')").click();
});

test("has login form", async ({ page }) => {
  await expect(page.locator("input[name='email']")).toHaveAttribute(
    "placeholder",
    "email"
  );

  await expect(page.locator("input[name='password']")).toHaveAttribute(
    "placeholder",
    "password"
  );

  await expect(page.locator("button[type='submit']")).toHaveText(
    "Login / Register"
  );
});
