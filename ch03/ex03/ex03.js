
export const compare = (a, b) => {
  return Math.abs(a - b) < Number.EPSILON;
}