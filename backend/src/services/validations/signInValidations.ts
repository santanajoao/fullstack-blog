import { SyncServiceResponse } from '../../types/serviceResponse';
import { signInSchema } from './schemas/account.schema';
import validateSchema from './validateSchemaFields';
import { Account } from '@prisma/client';
import { AsyncServiceResponse } from '../../types/serviceResponse';
import prisma from '../../lib/prisma';
import bcrypt from '../../lib/bcrypt';
import { AccountWithImage, SignInFields } from '../../types/account';

export const validatePassword = async (
  hash: string,
  password: string,
): AsyncServiceResponse<null> => {
  const correctPassword = await bcrypt.compare(hash, password);
  if (!correctPassword) {
    return { status: 'UNAUTHORIZED', data: { message: 'Senha incorreta' } };
  }
  return { status: 'SUCCESS', data: null };
}

export const validateSignInFields = (
  email: string,
  password: string,
): SyncServiceResponse<null> => {
  return validateSchema(signInSchema, { email, password });
};

export const validateEmailExistance = async (email: string): AsyncServiceResponse<AccountWithImage> => {
  const account = await prisma.account.findUnique({
    where: { email },
    include: { image: true },
  });

  if (!account) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Não foi possível encontrar uma conta com esse email', },
    };
  }
  return { status: 'SUCCESS', data: account };
};

export const validateSignIn = async (
  { email, password }: SignInFields
): AsyncServiceResponse<AccountWithImage> => {
  const fieldsValidation = validateSignInFields(email, password);
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  const existanceValidation = await validateEmailExistance(email);
  if (existanceValidation.status !== 'SUCCESS') return existanceValidation;

  const account = existanceValidation.data;
  const passwordValidation = await validatePassword(account.password, password);
  if (passwordValidation.status !== 'SUCCESS') return passwordValidation;

  return { status: 'SUCCESS', data: account };
}
