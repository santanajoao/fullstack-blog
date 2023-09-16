/*
 - find post by id
 - find popular week posts
 - find posts by topicId
 - count posts by topicId
 - find posts by accountId
 - create post
 - count posts by accountId
*/

import { Post } from "@prisma/client";
import { ModelPostCreation } from "../types/post";
import prisma from "../lib/prisma";

export const createPost = async (data: ModelPostCreation): Promise<Post> => {
  const { topics, ...otherData } = data;
  return prisma.post.create({
    data: {
      ...otherData,
      topics: { connect: topics },
    },
    include: { image: true },
  });  
};
