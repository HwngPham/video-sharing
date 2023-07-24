import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("Funny Movies");
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

test("has correct semantic", async ({ page }) => {
  expect(page.locator("main")).toBeDefined();
  expect(page.locator("nav")).toBeDefined();
});
