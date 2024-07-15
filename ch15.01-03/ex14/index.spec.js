import { test, expect } from "@playwright/test";

test.describe("Product List", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("ch15.01-03/ex14/index.html");
  });

  test("デフォルトはすべて表示", async ({ page }) => {
    const allProducts = await page.locator("#productList li").count();
    expect(allProducts).toBe(3);
  });

  test("食べ物", async ({ page }) => {
    await page.selectOption("#category-select", "food");

    const products = await page.locator(
      '#productList li:not([style*="display: none"])'
    );
    expect(await products.count()).toBe(1);
    await expect(products).toContainText("お菓子");
  });

  test("文房具", async ({ page }) => {
    await page.selectOption("#category-select", "stationery");

    const products = await page.locator(
      '#productList li:not([style*="display: none"])'
    );
    expect(await products.count()).toBe(2);
    await expect(products.nth(0)).toContainText("消しゴム");
    await expect(products.nth(1)).toContainText("ものさし");
  });

  test("すべて", async ({ page }) => {
    await page.selectOption("#category-select", "all");

    const allProducts = await page.locator("#productList li").count();
    expect(allProducts).toBe(3);
  });
});
