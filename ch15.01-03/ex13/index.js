console.log("1");
document
  .querySelector("nav")
  .querySelectorAll("a")
  .forEach((a) => console.log(a));

console.log("2");
const two = document
  .querySelector(".product-list")
  .querySelector(".product-item");
console.log(two);

console.log("3");
const three = document.querySelector(".cart").querySelector("img");
console.log(three);

console.log("4");
document
  .querySelector(".product-list")
  .querySelectorAll(".price")
  .forEach((a) => console.log(a));

console.log("5");
document
  .querySelector(".product-list")
  .querySelectorAll(".product-item")
  .forEach((a) => console.log(a.querySelector("img")));

console.log("6");
const six = document.querySelector(".search-bar").querySelector("button");
console.log(six);

console.log("7");
const seven = document.querySelector("footer").querySelector("p");
console.log(seven);

console.log("8");
document
  .querySelector(".product-list")
  .querySelectorAll(".product-item")
  .forEach((item, i) => {
    if (i % 2) {
      console.log(item);
    }
  });

console.log("9");
const nine = document
  .querySelector("header")
  .querySelector(".account")
  .querySelector("img");
console.log(nine);

console.log("10");
document
  .querySelector("nav")
  .querySelectorAll("a")
  .forEach((a) => {
    if (a.textContent === "会社情報") {
      console.log(a);
    }
  });
