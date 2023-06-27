import { SyncServiceResponse } from "../../types/ServiceResponse";
import { signInSchema } from "./schemas/account.schema";
import validateSchema from "./validateSchemaFields";
import { Account } from "@prisma/client";
import { AsyncServiceResponse } from "../../types/ServiceResponse";
import prisma from "../../lib/prisma";
import bcrypt from "../../lib/bcrypt";
import { SignInFields } from "../../types/account";

export const validateSignInFields = (
  email: string,
  password: string,
): SyncServiceResponse<null> => {
  return validateSchema(signInSchema, { email, password });
};

export const validateEmailExistance = async (email: string): AsyncServiceResponse<Account> => {
  const account = await prisma.account.findUnique({ where: { email } });
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
): AsyncServiceResponse<Account> => {
  const fieldsValidation = validateSignInFields(email, password);
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  const existanceValidation = await validateEmailExistance(email);
  if (existanceValidation.status !== 'SUCCESS') return existanceValidation;

  const account = existanceValidation.data;
  const correctPassword = await bcrypt.compare(account.password, password);
  if (!correctPassword) {
    return { status: 'UNAUTHORIZED', data: { message: 'Senha incorreta' } };
  }

  return { status: 'SUCCESS', data: account };
}
