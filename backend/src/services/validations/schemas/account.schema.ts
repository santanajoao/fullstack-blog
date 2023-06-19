import { z } from 'zod';

const nameMinLength = 3;
const nameMaxLength = 30;
const passwordMinLength = 8;
const passwordMaxLength = 126;
const emailMaxLength = 256;

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
  .email({ message: 'O email deve ser válido' })
  .max(emailMaxLength, {
    message: `O email deve ter ${emailMaxLength} caracteres ou menos`,
  });

export const accountPasswordSchema = z
  .string()
  .min(passwordMinLength, {
    message: `O email deve ter pelo menos ${passwordMinLength} caracteres`,
  })
  .max(passwordMaxLength, {
    message: `O email deve ter ${passwordMaxLength} caracteres ou menos`,
  });

const accountSchema = z.object({
  name: accountNameSchema,
  email: accountEmailSchema,
  password: accountPasswordSchema,
});

export default accountSchema;
