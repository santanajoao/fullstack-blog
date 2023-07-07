import HomeHeader from '@/components/Header/HomeHeader'
import PostList from '@/components/PostList';
import TopicHero from '@/components/TopicHero';
import { Post } from '@/types/Post';
import { Topic } from '@/types/Topic';
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
  
  return (
    <>
      <HomeHeader />
      <main>
        <TopicHero topicId={params.id} />
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
