import { z } from "zod";

export const commentMinLength = 2;
export const commentMaxLength = 300;

export const commentSchema = z
  .string()
  .min(commentMinLength, {
    message: `O comentário deve ter no mínimo ${commentMinLength} caracteres`,
  })
  .max(commentMaxLength, {
    message: `O comentário deve ter no máximo ${commentMaxLength} caracteres`,
  });

export const commentFieldsSchema = z.object({
  comment: commentSchema,
});
