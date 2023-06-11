export const getDateDaysAgo = (days: number): Date => {
  const MS_PER_DAY = 86400000;
  
  const daysInMs = days * MS_PER_DAY;
  const dateInMs = Date.now() - daysInMs;
  const dateDaysAgo = new Date(dateInMs);
  return dateDaysAgo;
}
