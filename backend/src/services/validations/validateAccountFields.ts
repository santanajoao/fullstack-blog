import { SyncServiceResponse } from '../../types/ServiceResponse';
import UserCreation from '../../types/user/UserCreation';
import accountSchema from './schemas/account.schema';

const validateAccountFields = (account: UserCreation): SyncServiceResponse<null> => {
  const validation = accountSchema.safeParse(account);
  if (!validation.success) {
    const [firstError] = validation.error.issues;
    const fieldName = firstError.path[0];
    return {
      status: 'INVALID_VALUE',
      data: { message: { [fieldName]: firstError.message } },
    }
  }

  return { status: 'SUCCESS', data: null };
};

export default validateAccountFields;
