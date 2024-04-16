export function any(...fns) {
  console.log(...fns)

  return function(...args) {
    return fns.some(fn => fn(...args));
  };
}

export function catching(a, b) {
  return function(...args){
    try {
      return a(...args);
    } catch (e) {
      return b(e);
    }
  };
}
