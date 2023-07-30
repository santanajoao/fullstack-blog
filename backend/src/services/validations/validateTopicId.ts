import { Topic } from '@prisma/client';
import prisma from '../../lib/prisma';
import { AsyncServiceResponse } from '../../types/serviceResponse';
import { uuidSchema } from './schemas/uuid.schema'

const validateTopicId = async (uuid: string): AsyncServiceResponse<Topic> => {
  const lengthValidation = uuidSchema.safeParse(uuid);
  if (!lengthValidation.success) {
    return { status: 'INVALID_VALUE', data: { message: 'id inválido' } };
  }

  const topic = await prisma.topic.findUnique({
    where: {
      id: uuid,
    },
  });

  if (!topic) {
    return { status: 'NOT_FOUND', data: { message: 'Topico não encontrado' } };
  }

  return { status: 'SUCCESS', data: topic };
}

export default validateTopicId;
