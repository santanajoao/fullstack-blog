import { Post } from "@prisma/client";

export type TPostCreation = Pick<Post, 'accountId' | 'content' | 'description' | 'title'>;