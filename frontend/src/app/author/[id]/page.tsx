import HomeHeader from '@/components/Header/HomeHeader';
import { Account } from '@/types/Account';
import React from 'react';
import Container from '@/components/Container';
import { Topic } from '@/types/Topic';
import Author from '@/components/Author';
import { serverApiUrl } from '@/services/constants';

interface Props {
  params: {
    id: string;
  }
}

type AuthorPostsCount = {
  likes: number;
  posts: number;
};

type Responses = [Account, AuthorPostsCount, Topic[]];

export default async function AuthorPage({ params }: Props) {
  const [author, count, topics]: Responses = await Promise.all([
    fetch(`${serverApiUrl}/accounts/${params.id}`, { next: { revalidate: 1 } }).then((res) => res.json()),
    fetch(`${serverApiUrl}/posts/account/${params.id}/count`).then((res) => res.json()),
    fetch(`${serverApiUrl}/topics/account/${params.id}`).then((res) => res.json()),
  ]);

  if (!author.id) {
    return <Author.NotFound />;
  }

  return (
    <>
      <HomeHeader />
      <main>
        <Author.Hero count={count} author={author} />

        <Container.Article>
          <Author.About author={author} />

          <Author.Topics topics={topics} />

          <Author.Posts author={author} />
        </Container.Article>
      </main>
    </>
  );
}
