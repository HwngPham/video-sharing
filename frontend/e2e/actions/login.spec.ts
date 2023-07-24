import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000");
  await page.locator("input[name='email']").fill("foobar@eg.com");
  await page.locator("input[name='password']").fill("foobar");
  await page.locator("button[type='submit']").click();
});

test("has welcome text", async ({ page }) => {
  expect(page.locator("p:has-text('Welcome foobar@eg.com')")).toBeDefined();
});

test("has 'Share a movie button'", async ({ page }) => {
  expect(page.locator("button:has-text('Share a movie')")).toBeDefined();
});

test("has 'Logout' button", async ({ page }) => {
  expect(page.locator("button:has-text('Logout')")).toBeDefined();
});
