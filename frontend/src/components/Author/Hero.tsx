import React from 'react';
import Image from 'next/image';
import { Account } from '@/types/Account';
import defaultPicture from 'public/user.webp';
import PostLikeCount from '../PostLikeCount';

interface Props {
  author: Account;
  posts: {
    likeCount: number;
    postCount: number;
  }
}

export default function Hero({ author, posts }: Props) {
  return (
    <header className="relative bg-primaryGreen px-3 pt-5 sm:px-5 sm:pt-7 flex gap-3 sm:gap-5 items-end mb-8">
      <Image
        width={160}
        height={160}
        src={author.imageUrl ?? defaultPicture}
        alt="Imagem de perfil de username"
        className="h-40 w-40 relative top-8 bg-gray-300 rounded-xl object-cover border-2 border-white"
      />

      <div className="pb-6 sm:pb-8 space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">{author.username}</h1>

        <PostLikeCount likeCount={posts.likeCount} postCount={posts.postCount} />
      </div>
    </header>
  );
}
