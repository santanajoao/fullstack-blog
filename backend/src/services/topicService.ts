import { PrismaClient, Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../types/ServiceResponse';

const prisma = new PrismaClient();

const getDateDaysAgo = (days: number): Date => {
  const MS_PER_DAY = 86400000;
  
  const daysInMs = days * MS_PER_DAY;
  const dateInMs = Date.now() - daysInMs;
  const dateDaysAgo = new Date(dateInMs);
  return dateDaysAgo;
}

const getPopularTopicIds = async (): AsyncServiceResponse<number[]> => {
  const dateSevenDaysAgo = getDateDaysAgo(7);

  const groupByTopicId = await prisma.topicPost.groupBy({
    by: ['topicId'],
    orderBy: {
      _count: {
        postId: 'desc',
      },
    },
    take: 10,
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
