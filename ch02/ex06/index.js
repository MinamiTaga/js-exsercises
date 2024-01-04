// 最後は改行しないようにしたい
export const fizzbuzz = () => [...Array(100).keys()].map(i => (++i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i.toString()).join('\n')

