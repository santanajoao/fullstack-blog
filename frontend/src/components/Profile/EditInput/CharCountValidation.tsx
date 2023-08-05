import React from 'react';
import { z } from 'zod';

interface Props {
  value: string;
  schema: z.ZodSchema;
  maxLength: number;
}

export default function CharCountValidation({ value, schema, maxLength }: Props) {
  const valid = schema.safeParse(value).success;

  return (
    <span
      className={`text-sm font-medium
        ${valid ? 'text-green-400' : 'text-red-400'}
      `}
    >
      {value.length}
      &nbsp;/&nbsp;
      {maxLength}
    </span>
  );
}
