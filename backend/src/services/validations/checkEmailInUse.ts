import prisma from '../../lib/prisma';
import { AsyncServiceResponse } from '../../types/ServiceResponse';

const checkEmailInUse = async (email: string): AsyncServiceResponse<null> => {
  const account = await prisma.user.findUnique({ where: { email } });
  if (account) {
    return {
      status: 'CONFLICT', data: { message: 'Esse email já está em uso' },
    };
  }
  return { status: 'SUCCESS', data: null };
};

export default checkEmailInUse;
