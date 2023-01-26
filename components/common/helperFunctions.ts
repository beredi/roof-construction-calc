export const roundToTwo = (num: number) => {
  return Math.round(num * 100 + Number.EPSILON) / 100;
};
