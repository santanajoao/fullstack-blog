export const generateStringWithLength = (length: number, caractere: string = ' '): string => {
  const string = caractere.repeat(length);
  return string;
}
