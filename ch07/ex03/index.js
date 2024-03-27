export function sum (arr) {
  if (!arr || arr.length <= 0) return 0;
  return arr.reduce((a,b) => a+b)
}

export function join (arr, cut) {
  try {
    if ( !arr ) throw Error('第一引数を渡してください');
  } catch (e) {
    console.log(e.message)
  };
  if ( arr.length === 0) return '';
  if (cut === null) {
    cut = 'null';
  } else if (cut === '') {
    return arr.reduce((a, b) => (a?.toString() || '') + ( b?.toString() || '' ))
  }

  return arr.reduce((a, b) => (a?.toString() || '') + (cut ? cut.toString() : ',') + ( b?.toString() || '' ))
}

export function reverse (arr) {
  return arr.reduce((a, b) => [b, ...a], []);
}

export function every(arr, rule) {
  // rule関数の引数3つ
  return arr.reduce((a, b) => a && rule(b), true);
}

export function some(arr, rule) {
  return arr.reduce((a, b) => a || rule(b), false);
}