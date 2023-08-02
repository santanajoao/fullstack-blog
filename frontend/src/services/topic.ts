import { Topic } from '@/types/Topic';
import TServiceResponse from '@/types/ServiceResponse';
import { treatFetchResponse } from './errorHandling';

type TopicInfos = {
  topic: Topic,
  posts: {
    likes: number,
    quantity: number,
  },
};

export const requestTopicInfos = async (
  topicId: string,
): Promise<TServiceResponse<TopicInfos>> => {
  try {
    const response = await fetch(
      `http://backend:3001/topics/${topicId}/posts/infos`,
      { next: { revalidate: 60 * 15 } },
    );

    return await treatFetchResponse<TopicInfos>(response);
  } catch (error) {
    return treatFetchResponse<TopicInfos>(error);
  }
};
