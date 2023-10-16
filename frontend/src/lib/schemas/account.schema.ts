import { z } from 'zod';
import { signEmailSchema, signNameSchema, signPasswordSchema } from './sign.schema';

export const aboutMaxLength = 200;

export const aboutSchema = z
  .string()
  .max(aboutMaxLength, {
    message: 'O seu sobre deve ter no máximo 200 caracteres',
  })
  .nullish();

export const profilePersonalSchema = z.object({
  username: signNameSchema,
  about: aboutSchema,
});

export const profileCredentialsSchema = z.object({
  email: signEmailSchema,
  password: signPasswordSchema,
  newPassword: signPasswordSchema,
});
