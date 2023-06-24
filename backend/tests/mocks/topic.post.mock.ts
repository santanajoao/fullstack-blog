import { PostTopic } from "@prisma/client";

const postTopic: PostTopic = {
  postId: 'UUID',
  topicId: 'UUID',
}

const postTopicList: PostTopic[] = [postTopic];

export default {
  postTopic,
  postTopicList,
};
