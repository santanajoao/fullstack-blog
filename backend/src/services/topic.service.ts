import { Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../types/ServiceResponse';
import prisma from '../lib/prisma';
import topicPostHelpers from './helpers/topicPost.helpers';
import { treatQuantity } from './validations/treatQuantity';

const getWeekPopularTopics = async (
  quantity: number
): AsyncServiceResponse<Topic[]> => {
  const topicsPosts = await topicPostHelpers.getWeekTopicsPosts();
  const topicIds = topicsPosts.map((topicPost) => topicPost.topicId);

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