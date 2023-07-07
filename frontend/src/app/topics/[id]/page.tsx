import HomeHeader from '@/components/Header/HomeHeader'
import PostList from '@/components/PostList';
import { Post } from '@/types/Post';
import { Topic } from '@/types/Topic';
import Image from 'next/image';
import React from 'react'

interface Params {
  params: {
    id: string;
  };
}

type Data = {
  topic: {
    name: string,
    imageUrl: string,
  },
  posts: Post[],
};

export default async function Topic({ params }: Params) {
  const response = await fetch(
    `http://backend:3001/topics/${params.id}/posts`,
    { next: { revalidate: 60 * 10 } },
  );
  
  const data: Data = await response.json();
  const likes = data.posts.reduce((sum, post) => sum + post.likes, 0);
  
  return (
    <>
      <HomeHeader />
      <main>
        <header className="relative h-40 bg-cover text-white">
          <Image
            src={`${data.topic.imageUrl}?size=1080`}
            width={1080}
            height={200}
            alt={`${data.topic.name} banner`}
            className="z-0 absolute inset-0 h-full w-full object-cover"
          />

          <div className="z-10 relative bg-black/60 h-full w-full px-4 sm:px-6 py-10 space-y-2">
            <h1 className="font-bold text-lg sm:text-2xl">
              Publicações sobre:
              &nbsp;
              <span className="underline font-normal">{data.topic.name}</span>
            </h1>

            <div className="flex gap-4">
              <span className="text-sm">
                <span className="font-bold">{data.posts.length}</span> postagens
              </span>
              
              <span className="text-sm">
                <span className="font-bold">{likes}</span> likes
              </span>
            </div>
          </div>
        </header>

        <div className="px-3 sm:px-5 pt-3 pb-5">
          <div className="space-x-5 pl-1">
            <label htmlFor="sort-posts">Ordenar por:</label>
            <select name="orderBy" id="sort-posts" className="p-1 rounded-sm">
              <option value="popular">Popular</option>
              <option value="likes">Likes</option>
              <option value="creation">Data de criação</option>
            </select>
          </div>

          <PostList posts={data.posts} />
        </div>
      </main>
    </>
  );
}
