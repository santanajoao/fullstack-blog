import { z } from 'zod';

export const nameMinLength = 3;
export const nameMaxLength = 30;
export const passwordMinLength = 8;
export const passwordMaxLength = 126;

export const accountNameSchema = z
  .string({ invalid_type_error: 'O campo "username" deve ser uma string' })
  .min(nameMinLength, `O nome deve ter pelo menos ${nameMinLength} caracteres`)
  .max(nameMaxLength, `O nome deve ter ${nameMaxLength} caracteres ou menos`);

export const accountEmailSchema = z
  .string({ invalid_type_error: 'O campo "email" deve ser uma string' })
  .email('O email deve ser válido');

export const accountPasswordSchema = z
  .string({ invalid_type_error: 'O campo "password" deve ser uma string' })
  .min(passwordMinLength, `A senha deve ter pelo menos ${passwordMinLength} caracteres`)
  .max(passwordMaxLength, `A senha deve ter ${passwordMaxLength} caracteres ou menos`);

export const signUpSchema = z.object({
  username: accountNameSchema,
  email: accountEmailSchema,
  password: accountPasswordSchema,
});

export const signInSchema = z.object({
  email: accountEmailSchema,
  password: accountPasswordSchema,
});

export const accountCredentialsSchema = z.object({
  email: accountEmailSchema,
  password: accountPasswordSchema,
  newPassword: accountPasswordSchema,
});

export default {
  signUpSchema,
  signInSchema,
};
