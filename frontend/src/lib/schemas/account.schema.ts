import { z } from 'zod';
import { signEmailSchema, signNameSchema, signPasswordSchema } from './sign.schema';

export const aboutMaxLength = 200;

export const aboutSchema = z
  .string()
  .max(aboutMaxLength, {
    message: 'O seu sobre deve ter no máximo 200 caracteres',
  });

export const profileSchema = z.object({
  imageUrl: z.string(),
  username: signNameSchema,
  about: aboutSchema,
  email: signEmailSchema,
  currentPassword: signPasswordSchema,
  newPassword: signPasswordSchema,
});
