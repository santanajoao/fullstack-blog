import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/serviceResponse';
import jwt from '../lib/jwt';
import bcrypt from '../lib/bcrypt';
import { validateEmailExistance, validateSignIn } from './validations/signInValidations';
import { AccountCreation, AccountPublicFields, SignInFields, SignResponse } from '../types/account';
import { getAccountPublicFields } from '../utils/account';
import { validateSignUp } from './validations/signUpValidations';

const createAccount = async (
  { username, email, password }: AccountCreation
): AsyncServiceResponse<SignResponse> => {
  const validation = await validateSignUp({ username, email, password });
  if (validation.status !== 'SUCCESS') return validation;

  const passwordHash = await bcrypt.encrypt(password);
  const createdAccount = await prisma.account
    .create({ data: { username, email, password: passwordHash } });

  const accountPublicFields = getAccountPublicFields(createdAccount);
  const token = jwt.createToken(accountPublicFields);
  
  return { status: 'SUCCESS', data: { token, account: accountPublicFields } };
};

const signIn = async ({
  email, password,
}: SignInFields): AsyncServiceResponse<SignResponse> => {
  const validation = await validateSignIn({ email, password });
  if (validation.status !== 'SUCCESS') return validation;

  const accountPublicFields = getAccountPublicFields(validation.data);
  const token = jwt
    .createToken(accountPublicFields);

  return { status: 'SUCCESS', data: { token, account: accountPublicFields } };
};

const getAccountByEmail = async (email: string): AsyncServiceResponse<AccountPublicFields> => {
  const validation = await validateEmailExistance(email);
  if (validation.status !== 'SUCCESS') return validation;

  const account = validation.data;
  const accountPublicFields = getAccountPublicFields(account);

  return { status: 'SUCCESS', data: accountPublicFields };
};

export default {
  createAccount,
  signIn,
  getAccountByEmail,
};
