import z from 'zod';

export const uuidLength = 36;
export const uuidSchema = z.string().length(uuidLength);
