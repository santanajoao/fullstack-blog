import { PostTopic } from "@prisma/client";
import prisma from "../lib/prisma";
import postService from "./post.service";
import { AsyncServiceResponse } from "../types/ServiceResponse";

const getWeekTopicsPosts = async (): AsyncServiceResponse<PostTopic[]> => {
  const response = await postService.getWeekPosts();
  if (response.status !== 'SUCCESS') return response;

  const weekPosts = response.data;
  const weekPostsIds = weekPosts.map((post) => post.id);

  const postsTopics = await prisma.postTopic.findMany({
    where: {
      postId: {
        in: weekPostsIds,
      },
    },
  });

  return { status: 'SUCCESS', data: postsTopics};
}

export default {
  getWeekTopicsPosts,
};
