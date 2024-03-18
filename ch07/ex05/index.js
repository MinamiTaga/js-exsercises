const seq = [1, 2, 3, 4, 5];

export function pop (seq) {
  const arr = [];
  seq.forEach((a, i) => {
    if (i === seq.length - 1) return;

    arr.push(a);
  });
  return arr;
}

export function push (seq, element) {
  const arr = [...seq];
  arr.push(element);
  return arr;
}

export function shift (seq) {
  const arr = [];
  seq.forEach((a, i) => {
    if (i === 0) return;

    arr.push(a);
  });
  return arr;
}

export function unshift (seq) {
  const arr = [0];
  seq.forEach((a, i) => {

    arr.push(a);
  });
  return arr;
}

export function sort (seq, rule) {
  const arr = [...seq];
  return arr.sort(rule);
}

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
