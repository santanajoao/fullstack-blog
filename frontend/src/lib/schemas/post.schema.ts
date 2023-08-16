import { z } from 'zod';

export const titleMinLength = 20;
export const titleMaxLength = 70;

export const descriptionMinLength = 20;
export const descriptionMaxLength = 200;

export const contentMinLength = 300;
export const contentMaxLength = 4000;

export const titleSchema = z.string()
  .min(titleMinLength, `O título deve ter no mínimo ${titleMinLength} caracteres`)
  .max(titleMaxLength, `O título deve ter no máximo ${titleMaxLength} caracteres`);

export const descriptionSchema = z.string()
  .min(descriptionMinLength, `A descrição deve ter no mínimo ${descriptionMinLength} caracteres`)
  .max(descriptionMaxLength, `A descrição deve ter no máximo ${descriptionMaxLength} caracteres`);

export const contentSchema = z.string()
  .min(contentMinLength, `O seu post deve ter no mínimo ${contentMinLength} caracteres`)
  .max(contentMaxLength, `O seu post deve ter no máximo ${contentMaxLength} caracteres`);

export const postSchema = z.object({
  title: titleSchema,
  description: descriptionSchema,
  content: contentSchema,
});
