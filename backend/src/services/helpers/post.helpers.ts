import { Post } from "@prisma/client";
import dates from "../../utils/dates";
import prisma from "../../lib/prisma";

const getWeekPosts = async (): Promise<Post[]> => {
  const posts = await prisma.post.findMany({
    where: {
      createdAt: {
        gte: dates.getDateDaysAgo(7),
      },
    },
  });

  return posts;
};

export default {
  getWeekPosts,
};
