// f はオブジェクトを1つ引数に取る関数
function cache(f) {
  console.time();
  const cacheMap = new WeakMap();

  return function cachedFn(obj) {
    if (!cacheMap.has(obj)) {
      const result = f(obj);
      cacheMap.set(obj, result);
    }
    return cacheMap.get(obj);
  };
}

export function slowFn(obj) {
  for (let i = 0; i < 10000; i++) {
    obj[i] = i;
  }
  return obj;
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
export const cachedSlowFn = cache(slowFn);

const obj = {};

cachedSlowFn(obj);
cachedSlowFn(obj);
cachedSlowFn(obj);
