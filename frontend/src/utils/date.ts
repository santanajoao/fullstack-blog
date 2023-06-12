export const dateToDayMonthString = (date: Date): string => {

  const dayMonth = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  });

  return dayMonth;
};
