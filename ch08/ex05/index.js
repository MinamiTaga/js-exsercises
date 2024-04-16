export function sequenceToObject (...values) {
  if (values.length % 2 !== 0) throw Error('偶数個の引数を渡してください')

  let obj = {}; 
  for (let i = 0; i < values.length; i = i + 2) {
    if (typeof(values[i]) !== 'string') throw Error('奇数番目の引数はstring型で渡してください')

    obj[values[i]] = values[i+1];
  }
  return obj;
}
