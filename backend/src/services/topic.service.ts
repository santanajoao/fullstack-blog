import { Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../types/ServiceResponse';
import { getDateDaysAgo } from '../utils/dates';
import prisma from '../lib/prisma';

// refatorar essas funções
const getPopularTopicIds = async (): Promise<void> => {
  // const dateSevenDaysAgo = getDateDaysAgo(7);

  // const groupByTopicId = await prisma.topicPost.groupBy({
  //   by: ['topicId'],
  //   orderBy: {
  //     _count: {
  //       postId: 'desc',
  //     },
  //   },
  //   take: 10,
  //   where: {
  //     createdAt: { gte: dateSevenDaysAgo },
  //   },
  // });

  // const topicIds = groupByTopicId.map((group) => group.topicId);
  // return { status: 'SUCCESS', data: topicIds };
};

const getPopularTopics = async (): Promise<void> => {
  // const topicIds = await getPopularTopicIds();
  // if (topicIds.status !== 'SUCCESS') return topicIds;

  // const popularTopics = await prisma.topic.findMany({
  //   where: {
  //     id: { in: topicIds.data },
  //   },
  // });

  // return { status: 'SUCCESS', data: popularTopics };
};

export default {
  getPopularTopics,
};
