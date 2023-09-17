/*
 - find week popular topics
 - find topics by accountId
 - search topics
*/

import { Topic } from '@prisma/client';
import prisma from '../lib/prisma';
import treatQuantity from '../services/validations/treatQuantity';
import { getDateDaysAgo } from '../utils/dates';

export const findWeekPopularTopics = (take: number) => {
  return prisma.topic.findMany({
    where: {
      posts: {
        some: {
          createdAt: {
            gte: getDateDaysAgo(7),
          },
        },
      },
    },
    take: treatQuantity(take),
    orderBy: {
      posts: {
        _count: 'desc',
      },
    },
  });
};

export const findTopicsByAccoundId = async (accountId: string) => {
  return prisma.topic.findMany({
    where: {
      posts: {
        some: {
          accountId,
        },
      },
    },
    distinct: ['id'],
  });
};

export const findTopicsByTopicName = async (name: string, excludeIds?: string[]) => {
  return prisma.topic.findMany({
    where: {
      name: {
        contains: name,
      },
      id: {
        notIn: excludeIds,
      },
    },
    take: 6,
  });
};

export const findTopicsByIds = async (ids: Topic['id'][]) => {
  return prisma.topic.findMany({ where: { id: { in: ids } } });
};

export const findTopicById = (id: string) => {
  return prisma.topic.findUnique({ where: { id } });
};
