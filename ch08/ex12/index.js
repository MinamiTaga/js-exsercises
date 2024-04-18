export function f(body) {
  // const body2 = body.replace(/\n/g, '');

  return new Function('$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', '$10', `return ${body};`);
}
// 複数行のbodyに対応できてない