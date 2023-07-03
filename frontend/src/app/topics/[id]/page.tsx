import HomeHeader from '@/components/Header/HomeHeader'
import PostList from '@/components/PostList';
import { Post } from '@/types/Post';
import { Topic } from '@/types/Topic';
import axios from 'axios';
import React from 'react'

interface Params {
  params: {
    id: string;
  };
}

export const revalidate = 60 * 5; // 5 minutes

type Data = {
  topic: string,
  posts: Post[],
};

export default async function Topic({ params }: Params) {
  const { data } = await axios.get<Data>(`http://backend:3001/topics/${params.id}/posts`);
  const likes = data.posts.reduce((sum, post) => sum + post.likes, 0);
  
  return (
    <>
      <HomeHeader />
      <main>
        <header className="bg-zinc-700 px-4 sm:px-6 py-10 bg-cover text-white space-y-2">
          <h1 className="font-bold text-lg sm:text-2xl">
            Publicações sobre:
            &nbsp;
            <span className="underline font-normal">{data.topic}</span>
          </h1>

          <div className="flex gap-4">
            <span className="text-sm">
              <span className="font-bold">{data.posts.length}</span> postagens
            </span>
            
            <span className="text-sm">
              <span className="font-bold">{likes}</span> likes
            </span>
          </div>
        </header>

        <div className="px-3 sm:px-5">
          <PostList posts={data.posts} />
        </div>
      </main>
    </>
  );
}
