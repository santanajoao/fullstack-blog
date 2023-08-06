import { z } from 'zod';

export const nameMinLength = 3;
export const nameMaxLength = 30;
export const passwordMinLength = 8;
export const passwordMaxLength = 126;

export const signNameSchema = z
  .string()
  .min(nameMinLength, {
    message: `O nome deve ter pelo menos ${nameMinLength} caracteres`,
  })
  .max(nameMaxLength, {
    message: `O nome deve ter ${nameMaxLength} caracteres ou menos`,
  });

export const signEmailSchema = z
  .string()
  .nonempty('O email é obrigatório')
  .email('O email deve ser válido');

export const signPasswordSchema = z
  .string()
  .min(passwordMinLength, `A senha deve ter pelo menos ${passwordMinLength} caracteres`)
  .max(passwordMaxLength, `A senha deve ter ${passwordMaxLength} caracteres ou menos`);

export const signUpSchema = z.object({
  username: signNameSchema,
  email: signEmailSchema,
  password: signPasswordSchema,
});

export const signInSchema = z.object({
  email: signEmailSchema,
  password: signPasswordSchema,
});

export const passwordChangeSchema = z.object({
  currentPassword: signPasswordSchema,
  newPassword: signPasswordSchema,
});
