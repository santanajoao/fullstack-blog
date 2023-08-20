import { Post, Topic } from "@prisma/client";

export type TPostCreation = Pick<Post, 'accountId' | 'content' | 'description' | 'title'> & {
  topics: Topic['id'][];
};