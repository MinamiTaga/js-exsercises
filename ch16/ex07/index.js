import fs from "fs";

export async function checkEntry(path) {
  const stats = await fs.statSync(path, () => {});
  if (stats.isFile()) {
    return "file";
  } else {
    return "directory";
  }
}

console.log(await checkEntry("./ch16/ex07/index.js"));

// テスト書く！
