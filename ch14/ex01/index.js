export const unwritableAndUnconfigurableObj = () => {
  const obj = Object.freeze({ a: 1 });
  return obj;
}

export const writableAndUnconfigurableObj = () => {
  const obj = Object.seal({ b: 2 });
  return obj;
}

export const nestedUnwritableObj = () => {
  const obj = Object.freeze({ c: Object.freeze({ d: Object.freeze({ e: 3 })})});
  return obj;
}
