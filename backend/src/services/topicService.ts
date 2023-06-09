import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getPopularTopicIds = async () => {
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

  const topicIds = groupByTopicId.map((group) => group.topicId)
  return topicIds;
};

const getPopularTopics = async () => {
  const topicIds = await getPopularTopicIds();

  const popularTopics = await prisma.topic.findMany({
    select: { name: true },
    where: {
      id: { in: topicIds },
    },
  });

  return popularTopics;
};

export default {
  getPopularTopics,
};
