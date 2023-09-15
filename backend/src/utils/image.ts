export const buildImageUrl = (type: string, buffer: Buffer): string => {
  return `data:${type};base64,${buffer.toString('base64')}`;
};
