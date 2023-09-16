import { AsyncServiceResponse } from '../../types/serviceResponse';
import { TPostCreation } from '../../types/post';
import * as topicModel from '../../models/topic.model';

export const validateTopics = async (topicIds: TPostCreation['topics']): AsyncServiceResponse<null> => {
  const topicList = await topicModel.findTopicsByIds(topicIds);

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
