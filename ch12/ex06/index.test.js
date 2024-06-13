import { walk } from "./index.js";

test('walk', () => {
  const directory = walk('./');
  const firstDir = directory.next();

  expect(firstDir.value.path).toBe('.DS_Store');
  expect(firstDir.value.isDirectory).toBe(false);
  expect(firstDir.done).toBe(false);

  const secondDir = directory.next();
  expect(secondDir.value.path).toBe('.eslintrc.cjs');
  expect(secondDir.value.isDirectory).toBe(false);

  const thirdDir = directory.next();
  expect(thirdDir.value.path).toBe('.git');
  expect(thirdDir.value.isDirectory).toBe(true);

  // ディレクトリの次は、そのディレクトリ配下の探索する
  const forthDir = directory.next();
  expect(forthDir.value.path).toBe('.git/COMMIT_EDITMSG');
  expect(forthDir.value.isDirectory).toBe(false);

  const fifthDir = directory.next();
  expect(fifthDir.value.path).toBe('.git/HEAD');
  expect(fifthDir.value.isDirectory).toBe(false);
})