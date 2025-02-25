enum Month {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

const getCurMonth = (): string => {
  const curMonthNum = new Date().getMonth() + 1;

  return Month[curMonthNum].toString();
};

export default getCurMonth;
