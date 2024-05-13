export class TypeMap {
  constructor() {
    this.map = new Map();
  }
  get(key) {
    return this.map[key];
  }
  set(key, value) {
    // valueがnullやundefinedはだめ
    if(value == null || value == undefined) {
      throw new Error('invalid value error')
    }

    // valueの型に、keyが一致しなければダメ
    if (
      (typeof value === 'string' && key !== String ) ||
      (typeof value === 'number' && key!== Number) ||
      (typeof value === 'object' && !(value instanceof key))
    ) {
      throw new Error('do not match key and value type')
    }

    this.map[key] = value;
  }
}
