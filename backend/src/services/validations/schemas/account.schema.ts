import { z } from 'zod';

export const nameMinLength = 3;
export const nameMaxLength = 30;
export const passwordMinLength = 8;
export const passwordMaxLength = 126;

export const accountNameSchema = z
  .string()
  .min(nameMinLength, {
    message: `O nome deve ter pelo menos ${nameMinLength} caracteres`,
  })
  .max(nameMaxLength, {
    message: `O nome deve ter ${nameMaxLength} caracteres ou menos`,
  });

export const accountEmailSchema = z
  .string()
  .email({ message: 'O email deve ser válido' });

export const accountPasswordSchema = z
  .string()
  .min(passwordMinLength, {
    message: `A senha deve ter pelo menos ${passwordMinLength} caracteres`,
  })
  .max(passwordMaxLength, {
    message: `A senha deve ter ${passwordMaxLength} caracteres ou menos`,
  });

export const accountSchema = z.object({
  name: accountNameSchema,
  email: accountEmailSchema,
  password: accountPasswordSchema,
});

export const signInSchema = z.object({
  email: accountEmailSchema,
  password: accountPasswordSchema,
});

export default {
  accountSchema,
  signInSchema,
};
