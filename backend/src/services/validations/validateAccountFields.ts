import { SyncServiceResponse } from '../../types/ServiceResponse';
import UserCreation from '../../types/user/UserCreation';
import accountSchema from './schemas/account.schema';

const validateAccountFields = (account: UserCreation): SyncServiceResponse<null> => {
  const validation = accountSchema.safeParse(account);
  if (!validation.success) {
    const [firstError] = validation.error.issues;
    return { status: 'INVALID_VALUE', data: { message: firstError.message } };
  }
  return { status: 'SUCCESS', data: null };
};

export default validateAccountFields;
