import { Post } from '@/types/Post';
import TServiceResponse from '@/types/ServiceResponse';
import { treatFetchResponse } from './errorHandling';

export const requestTopicPosts = async (
  topicId: string,
  orderBy: string,
): Promise<TServiceResponse<Post[]>> => {
  try {
    const response = await fetch(
      `http://localhost:3001/topics/${topicId}/posts?orderBy=${orderBy}`,
    );

    return await treatFetchResponse<Post[]>(response);
  } catch (error) {
    return treatFetchResponse<Post[]>(error);
  }
};
