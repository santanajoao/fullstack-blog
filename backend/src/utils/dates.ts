const MS_PER_DAY = 86400000;

export const getDateDaysAgo = (days: number): Date => {
  const daysInMs = days * MS_PER_DAY;
  const dateInMs = Date.now() - daysInMs;
  const dateDaysAgo = new Date(dateInMs);
  return dateDaysAgo;
}

export const getDateBetweenNowAnd = (daysAgo: number): Date => {
  const randomDaysDiff = Math.floor(Math.random() * (daysAgo + 1));
  const daysInMs = randomDaysDiff * MS_PER_DAY;
  const dateInMs = Date.now() - daysInMs;
  const randomDate = new Date(dateInMs);
  return randomDate;
}

export default {
  getDateDaysAgo,
  getDateBetweenNowAnd,
};
