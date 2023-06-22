import { z } from "zod";
import { SyncServiceResponse } from "../../types/ServiceResponse";

const validateFields = (schema: z.ZodType, data: unknown): SyncServiceResponse<null> => {
  const validation = schema.safeParse(data);

  if (!validation.success) {
    const [firstError] = validation.error.issues;
    const fieldName = firstError.path[0];
    return {
      status: 'INVALID_VALUE',
      data: { message: { [fieldName]: firstError.message } },
    }
  }
  return { status: 'SUCCESS', data: null }
};

export default validateFields;
