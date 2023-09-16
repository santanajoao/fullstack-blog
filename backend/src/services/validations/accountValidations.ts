import { AsyncServiceResponse } from "../../types/serviceResponse";
import { signUpSchema, signInSchema } from './schemas/account.schema';
import validateSchema from './validateSchemaFields';
import bcrypt from '../../lib/bcrypt';
import { AccountWithImage, SignInFields, AccountCreation } from '../../types/account';
import * as accountModel from '../../models/account.model';

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

export const validateAccountId = async (
  id: string,
): AsyncServiceResponse<AccountWithImage> => {
  const account = await accountModel.findAccountById(id);

  if (!account) {
    return { status: 'NOT_FOUND', data: { message: 'Conta não encontrada' } };
  }

  return { status: 'SUCCESS', data: account };
};

export const validateAccountPasswordById = async (
  id: string,
  password: string,
): AsyncServiceResponse<null> => {
  const accountValidation = await validateAccountId(id);
  if (accountValidation.status !== 'SUCCESS') return accountValidation;
  const account = accountValidation.data;

  const passwordValidation = await validatePassword(account.password, password);
  if (passwordValidation.status !== 'SUCCESS') return passwordValidation;
  
  return { status: 'SUCCESS', data: null };
};

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
  const schemaValidation = validateSchema(
    signUpSchema, { username, email, password },
  );
  if (schemaValidation.status !== 'SUCCESS') return schemaValidation;
  
  const conflictValidation = await checkEmailInUse(email);
  if (conflictValidation.status !== 'SUCCESS') return conflictValidation;

  return { status: 'SUCCESS', data: null };
}

export const validateEmailExistance = async (email: string): AsyncServiceResponse<AccountWithImage> => {
  const account = await accountModel.findAccountByEmail(email);

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
  const fieldsValidation = validateSchema(signInSchema, { email, password });
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  const existanceValidation = await validateEmailExistance(email);
  if (existanceValidation.status !== 'SUCCESS') return existanceValidation;

  const account = existanceValidation.data;
  const passwordValidation = await validatePassword(account.password, password);
  if (passwordValidation.status !== 'SUCCESS') return passwordValidation;

  return { status: 'SUCCESS', data: account };
}
