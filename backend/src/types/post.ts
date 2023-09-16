import { Post, Topic } from '@prisma/client';
import { ImageCreation, ImageKey } from './image';

export type TPostCreation = Pick<Post, 'accountId' | 'content' | 'description' | 'title'> & {
  topics: Topic['id'][];
  image: ImageCreation,
};

export type PostWithImage = Post & ImageKey;

export type PostRequiredFields = Pick<Post, 'accountId' | 'content' | 'description' | 'imageId' | 'title' | 'imageUrl'>

export type ModelPostCreation =  Partial<Post> & PostRequiredFields & {
  topics?: { id: Topic['id'] }[],
};
