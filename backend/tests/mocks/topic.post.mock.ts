import { TopicPost } from "@prisma/client";

const topicPost: TopicPost = {
  postId: 'UUID',
  topicId: 'UUID',
}

const topicPostList: TopicPost[] = [topicPost];

export default {
  topicPost,
  topicPostList,
};
