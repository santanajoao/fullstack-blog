import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/ServiceResponse';
import UserCreation from '../types/user/UserCreation';
import validateAccountFields from './validations/validateAccountFields';
import checkEmailInUse from './validations/checkEmailInUse';
import { createToken } from '../lib/jwt';
import bcrypt from '../lib/bcrypt';

const createAccount = async (account: UserCreation): Promise<AsyncServiceResponse<string>> => {
  const fieldsValidation = validateAccountFields(account);
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;
  
  const conflictValidation = await checkEmailInUse(account.email);
  if (conflictValidation.status !== 'SUCCESS') return conflictValidation;

  const passwordHash = await bcrypt.encrypt(account.password);
  await prisma.user.create({ data: { ...account, password: passwordHash } });
  const token = createToken({ email: account.email, name: account.name });
  
  return { status: 'SUCCESS', data: token };
};

export default {
  createAccount,
};
