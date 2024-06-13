import { fibonacciSequence, fibonacci2 } from "./index.js";

describe('fibonacci2', () => {
  it('fibonacciSequenceと同等である', () => {
    const fib2 = fibonacci2();
    const fibSeq = fibonacciSequence();

    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
    expect(fib2.return(5).toString()).toBe(fibSeq.return(5).toString())
    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
    expect(fib2.next().toString()).toBe(fibSeq.next().toString())
  })
})