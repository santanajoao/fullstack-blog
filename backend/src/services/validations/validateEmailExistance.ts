import { User } from "@prisma/client";
import { AsyncServiceResponse } from "../../types/ServiceResponse";
import prisma from "../../lib/prisma";

const validateEmailExistance = async (email: string): AsyncServiceResponse<User> => {
  const account = await prisma.user.findUnique({ where: { email } });
  if (!account) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Não foi possível encontrar uma conta com esse email' },
    };
  }
  return { status: 'SUCCESS', data: account };
};

export default validateEmailExistance;
