import { Post } from '@prisma/client';
import { PostWithImage } from '../types/post';
import { buildImageUrl } from './image';

export const buildPostWithImageUrl = (postWithImage: PostWithImage): Post => {
  const { image, ...post } = postWithImage;

  let imageUrl = '';
  if (image) {
    imageUrl = buildImageUrl(image?.type, image?.buffer)
  }

  return { ...post, imageUrl };
};
