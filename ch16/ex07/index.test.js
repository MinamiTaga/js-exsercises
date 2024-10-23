import { checkEntry } from "./index.js";

test("checkEntry", async () => {
  const filePath = "./ch16/ex07/index.js";
  const dirPath = "./ch16/ex07/";

  expect(await checkEntry(filePath)).toBe("file");
  expect(await checkEntry(dirPath)).toBe("directory");
});
