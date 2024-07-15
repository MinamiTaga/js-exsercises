import { type } from "./index.js"

describe('type', () => {
  it('valuesが1つ以下の時', () => {
    const str = 'str';
    const num = 123;
    const obj = {a: 123};

    expect(type`aaa${str}`).toBe('string')
    expect(type`aaa${num}`).toBe('number')
    expect(type`aaa${obj}`).toBe('object')
    expect(type`aaa`).toBe('undefined')
  })

  it('valuesが2つ以上の時', () => {
    const str = 'str';
    const num = 123;

    expect(type`aaa${str}${str}${str}`).toBe('string')
    expect(type`sss${num}aaa${str}`).toStrictEqual(['number', 'string'])
    expect(type`aa${str}aa${num}${str}`).toStrictEqual(['string', 'number', 'string'])
  })
})