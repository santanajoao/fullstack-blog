import HomeHeader from '@/components/Header/HomeHeader';
import { Account } from '@/types/Account';
import { TPost } from '@/types/Post';
import React from 'react';
import SectionListing from '@/components/SectionListing';
import { Topic } from '@/types/Topic';
import Author from '@/components/Author';

interface Props {
  params: {
    id: string;
  }
}

type AuthorPostsResponse = {
  posts: TPost[];
  likeCount: number;
  postCount: number;
};

type Responses = [Account, AuthorPostsResponse, Topic[]];

export default async function AuthorPage({ params }: Props) {
  const [author, posts, topics]: Responses = await Promise.all([
    fetch(`http://backend:3001/accounts/${params.id}`).then((res) => res.json()),
    fetch(`http://backend:3001/posts/account/${params.id}`).then((res) => res.json()),
    fetch(`http://backend:3001/topics/account/${params.id}`).then((res) => res.json()),
  ]);

  if (!author.id) {
    return <Author.NotFound />;
  }

  return (
    <>
      <HomeHeader />
      <main>
        <Author.Hero posts={posts} author={author} />

        <SectionListing.Article>
          <Author.About author={author} />

          <Author.Topics topics={topics} />

          <Author.BestPosts posts={posts.posts} author={author} />
        </SectionListing.Article>
      </main>
    </>
  );
}
