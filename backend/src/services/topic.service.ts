import { Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../types/serviceResponse';
import * as topicModel from '../models/topic.model';

const getWeekPopularTopics = async (
  quantity: number
): AsyncServiceResponse<Topic[]> => {
  const topics = await topicModel.findWeekPopularTopics(quantity);

  return { status: 'SUCCESS', data: topics };
};

const getAccountTopics = async (
  id: string,
): AsyncServiceResponse<Topic[]> => {
  const topics = await topicModel.findTopicsByAccoundId(id);

  return { status: 'SUCCESS', data: topics };
};

const getTopics = async (query: string = '', excludeIds: string[] = []): AsyncServiceResponse<Topic[]> => {
  const topics = await topicModel.findTopicsByTopicName(query, excludeIds);

  return { status: 'SUCCESS', data: topics };
};

export default {
  getWeekPopularTopics,
  getAccountTopics,
  getTopics,
};
