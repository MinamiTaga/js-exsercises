export class Hiragana {
  constructor (char) {
    this.char = char;
    this.code = char.charCodeAt(0)
  }

  [Symbol.toPrimitive](hint) {
    if(hint === 'number') {
      return this.code;
    }

    return this.char;
  }
}
