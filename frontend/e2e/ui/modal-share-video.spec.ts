import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000");
  await page.locator("input[name='email']").fill("foobar@eg.com");
  await page.locator("input[name='password']").fill("foobar");
  await page.locator("button[type='submit']").click();
  await page.locator("button:has-text('Share a movie')").click();
});

test("has title", async ({ page }) => {
  await expect(page.locator("h3#modal-title")).toHaveText(
    "Share a Youtube movie"
  );
});

test("has input for youtube url", async ({ page }) => {
  expect(page.locator("input#src")).toBeDefined();
});

test("has submit button", async ({ page }) => {
  expect(
    page.locator("div[role='dialog']").locator("button:has-text('Share')")
  ).toBeDefined();
});
