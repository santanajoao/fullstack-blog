import { Post } from "@prisma/client";
import prisma from "../lib/prisma";
import { AsyncServiceResponse } from "../types/ServiceResponse";
import { getDateDaysAgo } from "../utils/dates";

const getWeekPopularPosts = async (): AsyncServiceResponse<Post[]> => {
  const popularPosts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    where: {
      createdAt: {
        gte: getDateDaysAgo(7),
      },
    },
    orderBy: {
      likes: 'desc',
    },
    take: 8,
  });

  return { status: 'SUCCESS', data: popularPosts };
};

export default {
  getWeekPopularPosts,
};
