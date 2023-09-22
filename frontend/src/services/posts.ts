import { TPost } from '@/types/Post';
import TServiceResponse from '@/types/ServiceResponse';
import axios from 'axios';
import { treatAxiosResponse, treatFetchResponse } from './errorHandling';
import { clientApiUrl, serverApiUrl } from './constants';
import { Account } from '@/types/Account';
import { TopicWithoutImage } from '@/types/Topic';

export const requestTopicPosts = async (
  topicId: string,
  orderBy: string,
): Promise<TServiceResponse<TPost[]>> => {
  try {
    const response = await fetch(
      `${clientApiUrl}/topics/${topicId}/posts?orderBy=${orderBy}`,
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
    () => axios.post(`${clientApiUrl}/posts`, formData, {
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
      `${clientApiUrl}${endpoint}?quantity=${quantity}&page=${page}&orderBy=${orderBy}`,
    );

    return await treatFetchResponse<TPost[]>(response);
  } catch (error) {
    return treatFetchResponse<TPost[]>(error);
  }
};

type PostData = TPost & {
  account: Account;
  topics: TopicWithoutImage[],
};

export const requestPostById = async (id: string): Promise<TServiceResponse<PostData>> => {
  try {
    const response = await fetch(`${serverApiUrl}/posts/${id}`);
    return await treatFetchResponse<PostData>(response);
  } catch (error) {
    return await treatFetchResponse<PostData>(error);
  }
};
