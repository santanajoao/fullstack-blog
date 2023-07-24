import { Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../types/serviceResponse';
import prisma from '../lib/prisma';
import treatQuantity from './validations/treatQuantity';
import { getDateDaysAgo } from '../utils/dates';

const getWeekPopularTopics = async (
  quantity: number
): AsyncServiceResponse<Topic[]> => {
  const topics = await prisma.topic.findMany({
    where: {
      posts: {
        some: {
          createdAt: {
            gte: getDateDaysAgo(7),
          },
        },
      },
    },
    take: treatQuantity(quantity),
    orderBy: {
      posts: {
        _count: 'desc',
      },
    },
  });

  return { status: 'SUCCESS', data: topics };
};

export default {
  getWeekPopularTopics,
};
