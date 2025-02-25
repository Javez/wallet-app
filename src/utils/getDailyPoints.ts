import getDayOfSeason from "./getDayOfSeason";

const getDailyPoints = (date: Date): string => {
  const dayOfSeason = getDayOfSeason(date);

  if (dayOfSeason === 1) return "2";
  if (dayOfSeason === 2) return "3";

  let prev1 = 3;
  let prev2 = 2;
  let points = 0;

  for (let i = 3; i <= dayOfSeason; i++) {
    points = Math.round(prev2 + prev1 * 0.6);
    prev2 = prev1;
    prev1 = points;
  }

  return points >= 1000000
    ? `${Math.round(points / 1000000)}KK`
    : points >= 1000
    ? `${Math.round(points / 1000)}K`
    : `${points}`;
};

export default getDailyPoints;
