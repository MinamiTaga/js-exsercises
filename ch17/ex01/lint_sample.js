let a;
let x;
let y;
const r = 10;

if (Math) {
  a = Math.PI * r * r;
  x = r * Math.cos(Math.PI);
  y = r * Math.sin(Math.PI / 2);
}

console.log(a, x, y);
