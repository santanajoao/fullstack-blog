import { TPost } from '@/types/Post';
import TServiceResponse from '@/types/ServiceResponse';
import { treatFetchResponse } from './errorHandling';

export const requestTopicPosts = async (
  topicId: string,
  orderBy: string,
): Promise<TServiceResponse<TPost[]>> => {
  try {
    const response = await fetch(
      `http://localhost:3001/topics/${topicId}/posts?orderBy=${orderBy}`,
    );

    return await treatFetchResponse<TPost[]>(response);
  } catch (error) {
    return treatFetchResponse<TPost[]>(error);
  }
};
