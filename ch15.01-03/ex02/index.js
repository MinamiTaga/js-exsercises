async function main() {
  const module = await import("./test.js");
  const aaa = new module.Test();
  aaa.testMethod();
}

main();
