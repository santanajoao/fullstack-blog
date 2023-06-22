import { SyncServiceResponse } from '../../types/ServiceResponse';
import UserCreation from '../../types/user/UserCreation';
import { accountSchema } from './schemas/account.schema';
import validateFields from './validateFields';

const validateAccountFields = (account: UserCreation): SyncServiceResponse<null> => {
  return validateFields(accountSchema, account);
};

export default validateAccountFields;
