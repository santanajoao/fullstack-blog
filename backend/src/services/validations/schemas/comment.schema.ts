import { z } from 'zod';

export const commentMinLength = 2;
export const commentMaxLength = 200;

export const commentSchema = z
  .string({ invalid_type_error: 'O campo "comment" deve ser uma string' })
  .min(commentMinLength, {
    message: `O campo "comment" deve ter no mínimo ${commentMinLength} caracteres`,
  })
  .max(commentMaxLength, {
    message: `O campo "comment" deve ter no máximo ${commentMaxLength} caracteres`,
  });
