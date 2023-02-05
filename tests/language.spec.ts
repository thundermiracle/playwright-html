import { test, expect } from "@playwright/test";

test("language change", async ({ page }) => {
  await page.goto("https://gatsby-simple-blog.thundermiracle.com/");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "English" }).click();
  await page.getByRole("link", { name: "简体中文" }).click();
  await page
    .getByRole("heading", { name: "共 4 篇文章 (第1 到 3篇)" })
    .waitFor();

  await page.close();
});
