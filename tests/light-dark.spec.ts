import { test, expect } from "@playwright/test";

test("light-dark-mode", async ({ page }) => {
  await page.goto("https://gatsby-simple-blog.thundermiracle.com/");
  await page.getByRole("banner").locator("div").nth(1).click();
  await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixels: 100 });

  await page.getByRole("banner").locator("div").nth(2).click();
  await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixels: 100 });

  await page.close();
});
