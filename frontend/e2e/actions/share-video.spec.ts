import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000");
  await page.locator("input[name='email']").fill("foobar@eg.com");
  await page.locator("input[name='password']").fill("foobar");
  await page.locator("button[type='submit']").click();
  await page.locator("button:has-text('Share a movie')").click();
  await page
    .locator("input#src")
    .fill("https://www.youtube.com/live/Re6ZLW6gTVA?feature=share");
  await page
    .locator("div[role='dialog']")
    .locator("button:has-text('Share')")
    .click();
});

test("has embed movie on movies list", async ({ page }) => {
  const sharedVideo = page.frame({
    url: "https://www.youtube.com/embed/Re6ZLW6gTVA?feature=oembed",
  });
  expect(sharedVideo).toBeDefined();
});
