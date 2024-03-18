// globalThis.y = "global";
// const geval = eval;
// let x = "global";

// function f() {
//   let x = "local";
//   eval("x += 'changed';");
//   return x;
// }
 
// function g() {
//   let y = "local";
//   geval(" y += 'changed';");
//   return y;
// }
 
// console.log(f(), x);
// console.log(g(), y);

const obj = {b: 1};
const a = 1;
with (obj) {
  console.log(a);
}
// このエラーはtsのエラー、
// 実行はできる