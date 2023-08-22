import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/serviceResponse';
import jwt from '../lib/jwt';
import bcrypt from '../lib/bcrypt';
import { validateSignIn } from './validations/signInValidations';
import { AccountCreation, AccountCredentials, AccountPublicFields, SignInFields, SignResponse } from '../types/account';
import { getAccountPublicFields } from '../utils/account';
import { validateSignUp } from './validations/signUpValidations';
import { validateAccountId } from './validations/likeValidations';
import validateSchemaFields from './validations/validateSchemaFields';
import { accountCredentialsSchema } from './validations/schemas/account.schema';
import { validatePasswordChange } from './validations/accountValidations';

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

const getAccountById = async (accountId: string): AsyncServiceResponse<AccountPublicFields> => {
  const idValidation = await validateAccountId(accountId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const account = idValidation.data;
  const accountPublicFields = getAccountPublicFields(account);

  return { status: 'SUCCESS', data: accountPublicFields };
};

const updateAccountCredentials = async ({
  id,
  email,
  newPassword,
  password,
}: AccountCredentials): AsyncServiceResponse<AccountPublicFields> => {
  const fieldsValidation = validateSchemaFields(accountCredentialsSchema, {
    email, password, newPassword,
  });
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  const passwordValidation = await validatePasswordChange(id, password);
  if (passwordValidation.status !== 'SUCCESS') return passwordValidation;

  const newPasswordHash = await bcrypt.encrypt(newPassword);
  const updatedAccount = await prisma.account.update({
    where: { id },
    data: {
      password: newPasswordHash,
      email,
    },
  });

  const accountPublicFields = getAccountPublicFields(updatedAccount);
  return { status: 'SUCCESS', data: accountPublicFields };
};

export default {
  updateAccountCredentials,
  createAccount,
  signIn,
  getAccountById,
};
