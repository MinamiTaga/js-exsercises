export function eq(a, b) {

  if(typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }
  if(a === b) return true;
  // 数値の比較
  if (Number(a) === Number(b)) return true;
  // Dateの比較
  if (new Date(`${a}`).getTime() === new Date(`${b}`).getTime()) return true;
  if (String(new Date(`${a}`).getTime()) === String(new Date(b).getTime())) return true
  if (String(new Date(a).getTime()) === String(new Date(`${b}`).getTime())) return true
  return false;
}

export function lte(a, b) {

  // 文字列同士の比較
  if(typeof a == 'string' && typeof b === 'string') {
    return a <= b;
  }

  // 数値の比較
  if (Number(a) <= Number(b)) return true;

  // Dateの比較
  if (new Date(`${a}`).getTime() < new Date(`${b}`).getTime()) return true;
  return false;

  // objectと配列の比較できてない
}
