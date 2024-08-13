import { test, expect } from "@playwright/test";

test.describe("test", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.04-10/ex05");
  });

  test("circle", async ({ page }) => {
    const bigCircle = await page.getByTestId("bigCircle");
    const smallCircle = await page.getByTestId("smallCircle");

    expect(bigCircle).toBeTruthy();
    expect(smallCircle).toBeTruthy();
    await expect(bigCircle).toHaveAttribute("diameter", "1.2em");
    await expect(smallCircle).toHaveAttribute("diameter", ".6em");
    // rgbでチェックするみたいなので変換
    await expect(bigCircle).toHaveCSS("background-color", "rgb(0, 0, 255)"); // blue
    await expect(smallCircle).toHaveCSS("background-color", "rgb(255, 215, 0)"); // gold
  });
});
