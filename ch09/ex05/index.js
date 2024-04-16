
export function instanceOf (object, constructor) {
  let prt = Object.getPrototypeOf(object);

  while (prt !== null) {
    if (prt === constructor.prototype) {
      return true;
    }
    prt = Object.getPrototypeOf(prt);
  }

  return false;
}
