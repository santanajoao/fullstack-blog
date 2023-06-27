import { Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../types/ServiceResponse';
import prisma from '../lib/prisma';
import treatQuantity from './validations/treatQuantity';
import postTopicService from './post.topic.service';

const getWeekPopularTopics = async (
  quantity: number
): AsyncServiceResponse<Topic[]> => {
  const response = await postTopicService.getWeekTopicsPosts();
  if (response.status !== 'SUCCESS') return response;

  const postsTopics = response.data;
  const topicIds = postsTopics.map((postTopic) => postTopic.topicId);

  const topics = await prisma.topic.findMany({
    where: {
      id: {
        in: topicIds,
      }
    },
    take: treatQuantity(quantity),
  })

  return { status: 'SUCCESS', data: topics };
};

export default {
  getWeekPopularTopics,
};
