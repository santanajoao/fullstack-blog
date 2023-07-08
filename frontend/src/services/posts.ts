import { Post } from "@/types/Post";

export const requestTopicPosts = async (
  topicId: string, orderBy: string,
): Promise<Post[]> => {
  const response = await fetch(
    `http://localhost:3001/topics/${topicId}/posts?orderBy=${orderBy}`
  );
  const data: Post[] = await response.json();

  return data;
};
