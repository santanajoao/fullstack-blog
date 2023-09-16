import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/serviceResponse';
import jwt from '../lib/jwt';
import bcrypt from '../lib/bcrypt';
import { validateSignIn } from './validations/accountValidations';
import { AccountCreation, AccountCredentials, AccountPersonalInfosUpdate, AccountPublicFields, AccountWithImage, SignInFields, SignResponse } from '../types/account';
import { getAccountPublicFields } from '../utils/account';
import { validateSignUp } from './validations/accountValidations';
import { validateAccountId } from './validations/accountValidations';
import validateSchema from './validations/validateSchemaFields';
import { accountCredentialsSchema, accountPersonalInfosSchema } from './validations/schemas/account.schema';
import { validateAccountPasswordById } from './validations/accountValidations';
import { Account } from '@prisma/client';
import * as accountModel from '../models/account.model';

const createAccount = async (
  { username, email, password }: AccountCreation
): AsyncServiceResponse<SignResponse> => {
  const validation = await validateSignUp({ username, email, password });
  if (validation.status !== 'SUCCESS') return validation;

  const passwordHash = await bcrypt.encrypt(password);
  const createdAccount = await accountModel
    .createAccount({ password: passwordHash, username, email });

  const createdAccountPublicFields = getAccountPublicFields(createdAccount);
  const token = jwt.createToken(createdAccountPublicFields);
  
  return {
    status: 'SUCCESS', data: { token, account: createdAccountPublicFields },
  };
};

const signIn = async ({
  email, password,
}: SignInFields): AsyncServiceResponse<SignResponse> => {
  const validation = await validateSignIn({ email, password });
  if (validation.status !== 'SUCCESS') return validation;

  const accountPublicFields = getAccountPublicFields(validation.data);
  const token = jwt.createToken(accountPublicFields);

  return { status: 'SUCCESS', data: { token, account: accountPublicFields } };
};

const getAccountById = async (accountId: string): AsyncServiceResponse<AccountPublicFields> => {
  const idValidation = await validateAccountId(accountId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const account = idValidation.data;
  const accountPublicFields = getAccountPublicFields(account);

  return { status: 'SUCCESS', data: accountPublicFields };
};

const updateAccountCredentials = async (
  { id, email, newPassword, password }: AccountCredentials
): AsyncServiceResponse<AccountPublicFields> => {
  const fieldsValidation = validateSchema(accountCredentialsSchema, {
    email, password, newPassword,
  });
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  const passwordValidation = await validateAccountPasswordById(id, password);
  if (passwordValidation.status !== 'SUCCESS') return passwordValidation;

  const newPasswordHash = await bcrypt.encrypt(newPassword);
  const updatedAccount = await accountModel.updateAccountById(
    id, { email, password: newPasswordHash },
  ) as AccountWithImage;

  const accountPublicFields = getAccountPublicFields(updatedAccount);
  return { status: 'SUCCESS', data: accountPublicFields };
};

const deleteAccountImage = async (accountId: string): AsyncServiceResponse<null> => {
  const account = await prisma.account.findUnique({
    where: { id: accountId },
  }) as Account;

  if (account.imageId) {
    await prisma.image.delete({
      where: {
        id: account.imageId,
      }
    });
  }
  
  return { data: null, status: 'SUCCESS'  };
};

const updateAccountPersonalInfos = async ({
  id, username, about, image,
}: AccountPersonalInfosUpdate): AsyncServiceResponse<AccountPublicFields> => {
  const fieldsValidation = validateSchema(accountPersonalInfosSchema, {
    username, about,
  });
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  if (image) {
    await deleteAccountImage(id);
  }

  const updatedAccount = await prisma.account.update({
    where: { id },
    data: {
      username,
      about,
      image: image ? { create: image } : undefined,
    },
    include: { image: true },
  });

  const accountPublicFields = getAccountPublicFields(updatedAccount);  
  return { status: 'SUCCESS', data: accountPublicFields }
};

export default {
  updateAccountCredentials,
  updateAccountPersonalInfos,
  createAccount,
  signIn,
  getAccountById,
};
