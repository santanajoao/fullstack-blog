import { Account } from '@/types/Account';
import { TPost } from '@/types/Post';
import Image from 'next/image';
import React from 'react';
import LikeButton from '../LikeButton';
import AuthorCard from './AuthorCard';

interface Props {
  post: TPost;
  account: Account;
}

export default function Hero({ post, account }: Props) {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-left">
        {post.title}
      </h1>
      <p>{post.description}</p>

      <div className="flex justify-between items-center">
        <AuthorCard post={post} account={account} />

        <LikeButton
          postId={post.id}
        />
      </div>

      <Image
        width={768}
        height={768}
        src={post.imageUrl}
        className="w-full aspect-video bg-zinc-300 object-cover"
        alt="Imagem da postagem"
      />
    </header>
  );
}
