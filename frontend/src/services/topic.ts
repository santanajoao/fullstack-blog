import { Topic } from '@/types/Topic';
import TServiceResponse from '@/types/ServiceResponse';
import axios from 'axios';
import { treatAxiosResponse, treatFetchResponse } from './errorHandling';
import { clientApiUrl, serverApiUrl } from './constants';

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
      `${serverApiUrl}/topics/${topicId}/posts/infos`,
    );

    return await treatFetchResponse<TopicInfos>(response);
  } catch (error) {
    return treatFetchResponse<TopicInfos>(error);
  }
};

export const requestTopics = async (
  query?: string,
  idsToExclude?: string[],
): Promise<TServiceResponse<Topic[]>> => {
  const idsParam = idsToExclude && idsToExclude.join(',');
  const response = await treatAxiosResponse<Topic[]>(() => (
    axios.get(`${clientApiUrl}/topics?query=${query}&excludeIds=${idsParam}`)
  ));

  return response;
};
