import { Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../../types/serviceResponse';
import { uuidSchema } from './schemas/uuid.schema';
import * as topicModel from '../../models/topic.model';

const validateTopicId = async (uuid: string): AsyncServiceResponse<Topic> => {
  const lengthValidation = uuidSchema.safeParse(uuid);
  if (!lengthValidation.success) {
    return { status: 'INVALID_VALUE', data: { message: 'id inválido' } };
  }

  const topic = await topicModel.findTopicById(uuid);

  if (!topic) {
    return { status: 'NOT_FOUND', data: { message: 'Topico não encontrado' } };
  }

  return { status: 'SUCCESS', data: topic };
};

export default validateTopicId;
