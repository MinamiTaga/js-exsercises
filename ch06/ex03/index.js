let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();

console.log(f); // [object Object]
console.log(q.x + q.y); // 3

console.log(o.isPrototypeOf(p)); // true
console.log(o.isPrototypeOf(q)); // true

console.log(p.isPrototypeOf(o)); // false
console.log(q.isPrototypeOf(o)); // false

console.log(p.isPrototypeOf(q)); // true


let a = [];
a[0] = 1;
let b = Object.create(a);
b[1] = 2;
let c = Object.create(b);
c[2] = 3;

console.log(a); 
console.log(b); 
console.log(c);

console.log(a.isPrototypeOf(b)); // true
console.log(a.isPrototypeOf(c)); // true

console.log(b.isPrototypeOf(a)); // false
console.log(c.isPrototypeOf(a)); // false

console.log(b.isPrototypeOf(c)); // true


let s = new Date();
let t = Object.create(s);
let u = Object.create(t);

console.log(s); 
console.log(t); 
console.log(u);

console.log(s.isPrototypeOf(t)); // true
console.log(s.isPrototypeOf(u)); // true

console.log(t.isPrototypeOf(s)); // false
console.log(u.isPrototypeOf(s)); // false

console.log(t.isPrototypeOf(u)); // true

let l = new Map();
let m = Object.create(l);
let n = Object.create(m);

console.log(l); 
console.log(m); 
console.log(n);

console.log(l.isPrototypeOf(m)); // true
console.log(l.isPrototypeOf(n)); // true

console.log(m.isPrototypeOf(l)); // false
console.log(n.isPrototypeOf(l)); // false

console.log(m.isPrototypeOf(n)); // true