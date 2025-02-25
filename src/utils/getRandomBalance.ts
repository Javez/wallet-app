const getRandomBalance = (min: number = 1, max: number = 1000): number => {
  const randCents = Number(Math.floor(Math.random() * 99));
  const randDollars = Number(Math.floor(Math.random() * (max - min + 1)) + min);
  const str = `${randDollars}.${randCents}`;
  const result = Number(str);

  return result;
};

export default getRandomBalance;
