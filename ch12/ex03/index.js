export function* count() {
  let num = 0;

  for (; ;) {
  try {
      yield num++;
  } catch (e) {
    num = 0;
  }
}

}

const counter = count();
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.throw('error'))
console.log(counter.next())
console.log(counter.next())