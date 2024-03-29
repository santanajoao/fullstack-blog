import { z } from 'zod';
import { SyncServiceResponse } from '../../types/serviceResponse';

const validateSchemaFields = (schema: z.ZodType, data: unknown): SyncServiceResponse<null> => {
  const validation = schema.safeParse(data);

  if (!validation.success) {
    const [firstError] = validation.error.issues;
    return { status: 'INVALID_VALUE', data: { message: firstError.message } };
  }
  return { status: 'SUCCESS', data: null };
};

export default validateSchemaFields;
