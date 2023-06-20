import { Post } from "@prisma/client";
import prisma from "../lib/prisma";
import { AsyncServiceResponse } from "../types/ServiceResponse";
import dates from "../utils/dates";
import treatQuantity from "./validations/treatQuantity";

const getWeekPopularPosts = async (
  quantity: number,
): AsyncServiceResponse<Post[]> => {
  const popularPosts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
    where: {
      createdAt: {
        gte: dates.getDateDaysAgo(7),
      },
    },
    orderBy: {
      likes: 'desc',
    },
    take: treatQuantity(quantity),
  });

  return { status: 'SUCCESS', data: popularPosts };
};

export default {
  getWeekPopularPosts,
};
