import React from 'react';
import Image from 'next/image';
import { Topic } from '@/types/Topic';
import PostLikeCount from '../PostLikeCount';

interface Params {
  topic: Topic;
  posts: {
    likes: number;
    quantity: number;
  }
}

export default async function TopicHero({ posts, topic }: Params) {
  return (
    <header className="relative h-40 bg-cover text-white">
      <Image
        src={`${topic.imageUrl}?size=1080`}
        width={1080}
        height={200}
        alt={`${topic.name} banner`}
        className="z-0 absolute inset-0 h-full w-full object-cover"
      />

      <div className="z-5 relative bg-black/60 h-full w-full px-4 sm:px-6 py-10 space-y-2">
        <h1 className="font-bold text-lg sm:text-2xl">
          Publicações sobre:
          &nbsp;
          <span className="underline font-normal">{topic.name}</span>
        </h1>

        <PostLikeCount likeCount={posts.likes} postCount={posts.quantity} />
      </div>
    </header>
  );
}
