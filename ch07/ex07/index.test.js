import { sort } from "." 

describe('', () => {
  it('sort', () => {
    expect(sort([5, 9, 2])).toEqual([2, 5, 9])
    expect(sort([1, 1, 1, 2])).toEqual([1, 1, 1, 2])
    expect(sort([5])).toEqual([5])
  })
})