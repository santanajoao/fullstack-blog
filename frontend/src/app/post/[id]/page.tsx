import React from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import { Post as PostType } from '@/types/Post';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Footer from '@/components/Footer';
import Post from '@/components/Post';
import { Account } from '@/types/Account';
import styles from './style.module.css';

interface Params {
  params: {
    id: string;
  };
}

type PostData = PostType & {
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

        <ReactMarkdown className={`${styles.markdown} pt-3`} remarkPlugins={[remarkGfm]}>
          {postData.content}
        </ReactMarkdown>
      </main>
      <Footer />
    </>
  );
}
