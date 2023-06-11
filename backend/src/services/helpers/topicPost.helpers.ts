import { TopicPost } from "@prisma/client";
import postHelpers from "./post.helpers";
import prisma from "../../lib/prisma";

const getWeekTopicsPosts = async (): Promise<TopicPost[]> => {
  const weekPosts = await postHelpers.getWeekPosts();
  const weekPostsIds = weekPosts.map((post) => post.id);

  const topicPost = await prisma.topicPost.findMany({
    where: {
      postId: {
        in: weekPostsIds,
      },
    },
  });

  return topicPost;
}

export default {
  getWeekTopicsPosts,
};
