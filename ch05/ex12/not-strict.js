function set42(key) {
  eval(`${key} = 42;`);
}

set42("hello");
console.log(hello); // 42
