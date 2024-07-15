export const type = (strings, ...values) => {
  if (values.length > 1) {
    const types = values.map((value) => {
      return typeof value;
    })

    // もし全ての型が同じでなければ配列を返す
    return types.every((type) => type === types[0])
      ? types[0]
      : types;
  }

  return typeof values[0]
}