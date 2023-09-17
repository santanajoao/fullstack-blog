import { Post, Topic } from '@prisma/client';
import { ImageKey } from './image';

export type TPostCreation = Pick<Post, 'accountId' | 'content' | 'description' | 'title' | 'imageUrl'> & {
  topics: Topic['id'][];
};

export type PostWithImage = Post & ImageKey;

export type PostRequiredFields = Pick<Post, 'accountId' | 'content' | 'description' | 'title' | 'imageUrl'>

export type ModelPostCreation =  Partial<Post> & PostRequiredFields & {
  topics?: { id: Topic['id'] }[],
};
