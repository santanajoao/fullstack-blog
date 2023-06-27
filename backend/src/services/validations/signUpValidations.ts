import { AccountCreation } from "../../types/account";
import prisma from '../../lib/prisma';
import { AsyncServiceResponse } from '../../types/serviceResponse';
import validateSchemaFields from "./validateSchemaFields";
import { signUpSchema } from "./schemas/account.schema";

export const checkEmailInUse = async (email: string): AsyncServiceResponse<null> => {
  const account = await prisma.account.findUnique({ where: { email } });
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
  const fieldsValidation = validateSchemaFields(
    signUpSchema,
    { username, email, password },
  );
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;
  
  const conflictValidation = await checkEmailInUse(email);
  if (conflictValidation.status !== 'SUCCESS') return conflictValidation;

  return { status: 'SUCCESS', data: null };
}