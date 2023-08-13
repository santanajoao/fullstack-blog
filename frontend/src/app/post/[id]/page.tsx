import React from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import { TPost } from '@/types/Post';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Footer from '@/components/Footer';
import { Account } from '@/types/Account';
import Post from '@/components/Post';
import styles from './style.module.css';
import Container from '@/components/Container';

interface Params {
  params: {
    id: string;
  };
}

type PostData = TPost & {
  account: Account;
};

export default async function PostPage({ params }: Params) {
  const response = await fetch(`http://backend:3001/posts/${params.id}`);

  if (response.status === 404) {
    return <Post.NotFound />;
  }

  const postData = await response.json() as PostData;

  return (
    <>
      <HomeHeader />
      <main className="w-full max-w-2xl mx-auto py-5 px-4">
        <Post.Hero account={postData.account} post={postData} />

        <Container.Markdown className="pt-3">
          {postData.content}
        </Container.Markdown>
      </main>
      <Footer />
    </>
  );
}
