import { pop, push, shift, sort, unshift } from ".";

describe('元のオブジェクトに変更がないことを確認', () => {
  const seq = [1, 2, 3, 4, 5];

  it('pop', () => {
    expect(pop(seq)).toEqual([1, 2, 3, 4])
    expect(seq).toEqual([1, 2, 3, 4, 5])
  })

  it('push', () => {
    expect(push(seq, 6)).toEqual([1, 2, 3, 4, 5, 6])
    expect(seq).toEqual([1, 2, 3, 4, 5])
  })

  it('shift', () => {
    expect(shift(seq)).toEqual([2, 3, 4, 5])
    expect(seq).toEqual([1, 2, 3, 4, 5])
  })

  it('unshift', () => {
    expect(unshift(seq, 0)).toEqual([0, 1, 2, 3, 4, 5])
    expect(seq).toEqual([1, 2, 3, 4, 5])
  })

  it('sort', () => {
    expect(sort(seq, (a, b) => b - a)).toEqual([5, 4, 3, 2, 1])
    expect(seq).toEqual([1, 2, 3, 4, 5])
  })
})