import { AccountCreation } from '../../types/account';
import { AsyncServiceResponse } from '../../types/serviceResponse';
import validateSchemaFields from './validateSchemaFields';
import { signUpSchema } from './schemas/account.schema';
import * as accountModel from '../../models/account.model';

export const checkEmailInUse = async (email: string): AsyncServiceResponse<null> => {
  const account = await accountModel.findAccountByEmail(email);
  if (account) {
    return {
      status: 'CONFLICT', data: { message: 'Esse email já está em uso' },
    };
  }
  return { status: 'SUCCESS', data: null };
};

export const validateSignUp = async (
  { username, email, password }: AccountCreation
): AsyncServiceResponse<null> => {
  const schemaValidation = validateSchemaFields(
    signUpSchema, { username, email, password },
  );
  if (schemaValidation.status !== 'SUCCESS') return schemaValidation;
  
  const conflictValidation = await checkEmailInUse(email);
  if (conflictValidation.status !== 'SUCCESS') return conflictValidation;

  return { status: 'SUCCESS', data: null };
}