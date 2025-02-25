const toFixed = (number: number | string, fixedAmount: number): number => {
  return Number(String(Number(number)?.toFixed(fixedAmount)));
};
export default toFixed;
