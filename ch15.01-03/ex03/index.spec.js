import { expect, test } from "@playwright/test";

test.describe("", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.01-03/ex03");
  });

  // test("integrity属性が正しいとロードされる", async ({ page }) => {
  //   expect(Boolean(page.getByTestId("test"))).toBe(true);
  // });
  test("integrity属性が正しくないとロードされない", async ({ page }) => {
    console.log(page);
    expect(page.getByText("index.js読み込まれた")).toBeNull();
  });
});
