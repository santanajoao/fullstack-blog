import React from 'react';
import { z } from 'zod';

interface Props {
  value: string;
  schema: z.ZodSchema;
  maxLength: number;
  className?: string;
}

export default function CharCountValidation({
  value, schema, maxLength, className,
}: Props) {
  const valid = schema.safeParse(value).success;

  return (
    <span
      className={`text-sm font-medium
        ${valid ? 'text-green-400' : 'text-red-400'}
        ${className}
      `}
    >
      {value.length}
      &nbsp;/&nbsp;
      {maxLength}
    </span>
  );
}
