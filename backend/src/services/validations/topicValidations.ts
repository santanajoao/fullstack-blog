import { AsyncServiceResponse } from '../../types/serviceResponse';
import prisma from '../../lib/prisma';
import { TPostCreation } from '../../types/post';

export const validateTopics = async (topicIds: TPostCreation['topics']): AsyncServiceResponse<null> => {
  const topicList = await prisma.topic.findMany({
    where: {
      id: {
        in: topicIds,
      },
    },
  });

  if (topicList.length !== topicIds.length) {
    const invalidTopic = topicList.find((topic) => !(topic.id in topicIds));
    return {
      status: 'NOT_FOUND',
      data: {
        message: `Tópico ${invalidTopic?.name} com id ${invalidTopic?.id} não encontrado`,
      },
    };
  }

  return { status: 'SUCCESS', data: null };
};
