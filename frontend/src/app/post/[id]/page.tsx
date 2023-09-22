import React from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import { TPost } from '@/types/Post';
import Footer from '@/components/Footer';
import { Account } from '@/types/Account';
import Post from '@/components/Post';
import Container from '@/components/Container';
import { TopicWithoutImage } from '@/types/Topic';
import { requestPostById } from '@/services/posts';

interface Params {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: Params) {
  const response = await requestPostById(params.id);

  if (response.status === 404) {
    return <Post.NotFound />;
  }

  // Uma tela de erro faz sentido aqui
  if (!response.success) return null;
  
  const postData = response.data;
  
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
