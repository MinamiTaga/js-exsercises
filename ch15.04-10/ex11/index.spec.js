import { expect, test } from "@playwright/test";

test.describe("todo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.04-10/ex11/index.html");
    await page.locator("#new-todo").fill("todo1");
    await page.locator("#new-todo-form button").click();
    await page.locator("#new-todo").fill("todo2");
    await page.locator("#new-todo-form button").click();
    await page.locator("#new-todo").fill("todo3");
    await page.locator("#new-todo-form button").click();

    // 1つ目は完了
    const todo1 = page.locator("#todo-list li").first();
    await todo1.locator('input[type="checkbox"]').check();
  });

  test("active", async ({ page }) => {
    const activeLinc = await page.locator('footer li a[href="#/active"]');
    await activeLinc.click();

    const activeList = await page.locator("#todo-list>li:visible");
    await expect(activeList).toHaveCount(2);
  });

  test("completed", async ({ page }) => {
    const completedLinc = await page.locator('footer li a[href="#/completed"]');
    await completedLinc.click();

    const activeList = await page.locator("#todo-list>li:visible");
    await expect(activeList).toHaveCount(1);
  });

  test("all", async ({ page }) => {
    const allLink = await page.locator('footer li a[href="#/"]');
    await allLink.click();

    const allList = await page.locator("#todo-list>li:visible");
    await expect(allList).toHaveCount(3);
  });
});
