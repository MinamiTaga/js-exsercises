export class IgnoreAccentPattern {
  constructor(pattern) {
    if (pattern instanceof RegExp) {
      this.normalizedPatterm = this.normalize(pattern.source);
      this.regexp = new RegExp(this.normalizedPatterm, pattern.flags);
    } else {
      this.normalizedPatterm = this.normalize(pattern);
      this.regexp = new RegExp(this.normalizedPatterm);
    }
  }
  normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  [Symbol.search](s) {
    return this.normalize(s).search(this.regexp);
  }

  [Symbol.match](s) {
    return this.normalize(s).match(this.regexp);
  }
}
