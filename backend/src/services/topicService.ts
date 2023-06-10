import { PrismaClient, Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../types/ServiceResponse';

const prisma = new PrismaClient();

const getPopularTopicIds = async (): AsyncServiceResponse<number[]> => {
  const sevenDaysMs = 604800000;
  const dateMsSevenDaysAgo = Date.now() - sevenDaysMs;
  const dateSevenDaysAgo = new Date(dateMsSevenDaysAgo);

  const groupByTopicId = await prisma.topicPost.groupBy({
    by: ['topicId'],
    _count: { _all: true },
    where: {
      createdAt: { gte: dateSevenDaysAgo },
    },
  });

  const topicIds = groupByTopicId.map((group) => group.topicId);
  return { status: 'SUCCESS', data: topicIds };
};

const getPopularTopics = async (): AsyncServiceResponse<Topic[]> => {
  const topicIds = await getPopularTopicIds();
  if (topicIds.status !== 'SUCCESS') return topicIds;

  const popularTopics = await prisma.topic.findMany({
    where: {
      id: { in: topicIds.data },
    },
  });

  return { status: 'SUCCESS', data: popularTopics };
};

export default {
  getPopularTopics,
};
