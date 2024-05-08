const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// 1
let sumOfMath = 0;
data.forEach((data) => (sumOfMath += data.math));
console.log(1, sumOfMath);

// 2
let sumOfChem = 0;
data.forEach((data) => (sumOfChem += data.chemistry));
const aveOfChem = sumOfChem / data.length;
console.log(2, aveOfChem);

// 3
let sumOf3ClassC = 0;
let numberOfClassC = 0;
data.forEach((data) => {
  if (data.class === "C") {
    sumOf3ClassC += data.math + data.chemistry + data.geography;
    numberOfClassC++;
  }
});
const aveOf3ClassC = sumOf3ClassC / numberOfClassC;
console.log(3, aveOf3ClassC);

// 4
const studentOfHiestTatal = data.reduce((a, b) => {
  const aTotal = a.math + a.chemistry + a.geography;
  const bTotal = b.math + b.chemistry + b.geography;
  return aTotal > bTotal ? a : b;
}).name;
console.log(4, studentOfHiestTatal);

// 5
let sumOfGeo = 0;
data.forEach((data) => (sumOfGeo += data.geography));
const aveOfGeo = sumOfGeo / data.length;

let sumOfGeoDifference = 0;
data.forEach((data) => {
  sumOfGeoDifference += (aveOfGeo - data.geography) ** 2;
});

const variance = sumOfGeoDifference / data.length;
const deviation = Math.sqrt(variance);

console.log(5, deviation);
