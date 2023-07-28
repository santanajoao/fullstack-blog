import React from 'react';
import { Topic } from '@/types/Topic';
import Image from 'next/image';

type ResponseData = {
  topic: Topic,
  posts: {
    likes: number,
    quantity: number,
  },
};

interface Params {
  topicId: string,
}

export default async function TopicHero({ topicId }: Params) {
  const response = await fetch(
    `http://backend:3001/topics/${topicId}/posts/infos`,
    { next: { revalidate: 60 * 15 } }, // 15 minutos
  );
  const data = await response.json() as ResponseData;

  return (
    <header className="relative h-40 bg-cover text-white">
      <Image
        src={`${data.topic.imageUrl}?size=1080`}
        width={1080}
        height={200}
        alt={`${data.topic.name} banner`}
        className="z-0 absolute inset-0 h-full w-full object-cover"
      />

      <div className="z-5 relative bg-black/60 h-full w-full px-4 sm:px-6 py-10 space-y-2">
        <h1 className="font-bold text-lg sm:text-2xl">
          Publicações sobre:
          &nbsp;
          <span className="underline font-normal">{data.topic.name}</span>
        </h1>

        <div className="flex gap-4">
          <span className="text-sm">
            <span className="font-bold">{data.posts.quantity}</span>
            {' '}
            postagens
          </span>

          <span className="text-sm">
            <span className="font-bold">{data.posts.likes}</span>
            {' '}
            likes
          </span>
        </div>
      </div>
    </header>
  );
}
