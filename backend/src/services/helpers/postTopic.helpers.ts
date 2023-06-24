import { PostTopic } from "@prisma/client";
import postHelpers from "./post.helpers";
import prisma from "../../lib/prisma";

const getWeekTopicsPosts = async (): Promise<PostTopic[]> => {
  const weekPosts = await postHelpers.getWeekPosts();
  const weekPostsIds = weekPosts.map((post) => post.id);

  const postsTopics = await prisma.postTopic.findMany({
    where: {
      postId: {
        in: weekPostsIds,
      },
    },
  });

  return postsTopics;
}

export default {
  getWeekTopicsPosts,
};
