const curYear = new Date().getFullYear();

const seasonStartDates = {
  spring: new Date(curYear, 2, 1), // March 1
  summer: new Date(curYear, 5, 1), // June 1
  autumn: new Date(curYear, 8, 1), // September 1
  winter: new Date(curYear - 1, 11, 1), // December 1
};

const getDayOfSeason = (date: Date): number => {
  let seasonStart: Date;

  if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    // Spring (March 1 - May 31)
    seasonStart = seasonStartDates.spring;
  } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    // Summer (June 1 - August 31)
    seasonStart = seasonStartDates.summer;
  } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
    // Autumn (September 1 - November 30)
    seasonStart = seasonStartDates.autumn;
  } else {
    // Winter (December 1 - February 28/29)
    seasonStart = seasonStartDates.winter;
  }

  const diffInTime = date.getTime() - seasonStart.getTime();
  const dayOfSeason = Math.floor(diffInTime / (1000 * 60 * 60 * 24)) + 1;
  return dayOfSeason;
};

export default getDayOfSeason;
