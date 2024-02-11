
export const add = (num1, num2) => {
  const real = num1.real + num2.real;
  const imaginary = num1.imaginary + num2.imaginary;
  return { real, imaginary };
}

export const sub = (num1, num2) => {
  const real = num1.real - num2.real;
  const imaginary = num1.imaginary - num2.imaginary;
  return { real, imaginary };
}

export const mul = (num1, num2) => {
  const real = num1.real * num2.real - num1.imaginary * num2.imaginary;
  const imaginary = num1.real * num2.imaginary + num1.imaginary * num2.real;
  return { real, imaginary };
}

export const div = (num1, num2) => {
  (num1.real + num1.imaginary) * (num2.real - num2.imaginary) / (num2.real + num2.imaginary) * (num2.real - num2.imaginary);
  const real = ((num1.real * num2.real) + (num1.imaginary * num2.imaginary)) / (num2.real ^ 2 - num2.imaginary ^ 2)
  const imaginary = (num1.imaginary * num2.real) - (num1.real * num2.imaginary) / (num2.real ^ 2 - num2.imaginary ^ 2)
  return { real, imaginary };
}