import { add, div, mul, sub } from "."

describe('complex', () => {
  const num1 = {real: 3, imaginary: 5};
  const num2 = {real: 1, imaginary: 1};


  describe(add, () => {
    it('足し算した値が返る', () => {
      expect(add(num1, num2).real).toBe(4)
      expect(add(num1, num2).imaginary).toBe(6)
    })
  })

  describe(sub, () => {
    it('引き算した値が返る', () => {
      expect(sub(num1, num2).real).toBe(2)
      expect(sub(num1, num2).imaginary).toBe(4)
    })
  })

  describe(mul, () => {
    it('掛け算した値が返る', () => {
      expect(mul(num1, num2).real).toBe(-2)
      expect(mul(num1, num2).imaginary).toBe(8)
    })
  })

  describe(div, () => {
    it('割り算した値が返る', () => {
      expect(div(num1, num2).real).toBe(4)
      expect(div(num1, num2).imaginary).toBe(3.5)
    })
  })
})