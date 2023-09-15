import { Post, Topic } from "@prisma/client";
import { ImageCreation, ImageKey } from "./image";

export type TPostCreation = Pick<Post, 'accountId' | 'content' | 'description' | 'title'> & {
  topics: Topic['id'][];
  image: ImageCreation,
};

export type PostWithImage = Post & ImageKey;
