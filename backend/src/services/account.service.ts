import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/ServiceResponse';
import UserCreation from '../types/user/UserCreation';
import validateAccountFields from './validations/validateAccountFields';
import checkEmailInUse from './validations/checkEmailInUse';
import jwt from '../lib/jwt';
import bcrypt from '../lib/bcrypt';
import Token from '../types/account/Token';
import validateEmailExistance from './validations/validateEmailExistance';
import validateSignInFields from './validations/validateSignInFields';

const createAccount = async (account: UserCreation): Promise<AsyncServiceResponse<Token>> => {
  const fieldsValidation = validateAccountFields(account);
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;
  
  const conflictValidation = await checkEmailInUse(account.email);
  if (conflictValidation.status !== 'SUCCESS') return conflictValidation;

  const passwordHash = await bcrypt.encrypt(account.password);
  await prisma.user.create({ data: { ...account, password: passwordHash } });

  const token = jwt.createToken({ email: account.email, name: account.name });
  return { status: 'SUCCESS', data: { token } };
};

const signIn = async (email: string, password: string): Promise<AsyncServiceResponse<Token>> => {
  const fieldsValidation = validateSignInFields(email, password);
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  const existanceValidation = await validateEmailExistance(email);
  if (existanceValidation.status !== 'SUCCESS') return existanceValidation;

  const user = existanceValidation.data;
  const correctPassword = await bcrypt.compare(user.password, password);
  if (!correctPassword) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: { password: 'Senha incorreta' } },
    };
  }

  const token = jwt.createToken({ email, name: user.name });
  return { status: 'SUCCESS', data: { token } };
};

export default {
  createAccount,
  signIn,
};
