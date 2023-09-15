import { TPost, TPostCreation } from '@/types/Post';
import TServiceResponse from '@/types/ServiceResponse';
import axios from 'axios';
import { treatAxiosResponse, treatFetchResponse } from './errorHandling';

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

export const createPost = async (
  formData: FormData,
  token: string,
): Promise<TServiceResponse<TPost>> => {
  const response = await treatAxiosResponse<TPost>(
    () => axios.post('http://localhost:3001/posts', formData, {
      headers: { Authorization: token },
    }),
  );

  return response;
};

type RequestPostsParams = {
  endpoint: string;
  quantity: number;
  page: number;
  orderBy?: string;
};

export const requestPosts = async ({
  endpoint, quantity, page, orderBy,
}: RequestPostsParams): Promise<TServiceResponse<TPost[]>> => {
  try {
    const response = await fetch(
      `http://localhost:3001${endpoint}?quantity=${quantity}&page=${page}&orderBy=${orderBy}`,
    );

    return await treatFetchResponse<TPost[]>(response);
  } catch (error) {
    return treatFetchResponse<TPost[]>(error);
  }
};
