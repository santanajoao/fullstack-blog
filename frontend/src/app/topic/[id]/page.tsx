import React from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import Footer from '@/components/Footer';
import { requestTopicInfos } from '@/services/topic';
import NotFound from '@/components/Topic/NotFound';
import Topic from '@/components/Topic';

interface Params {
  params: {
    id: string;
  };
}

export default async function TopicPage({ params }: Params) {
  const response = await requestTopicInfos(params.id);

  if (response.status === 404) return <NotFound />;

  // uma página de erro faz sentido aqui
  if (!response.success) return null;

  const { posts, topic } = response.data;

  return (
    <>
      <HomeHeader />
      <main className="flex-grow">
        <Topic.Hero posts={posts} topic={topic} />

        <Topic.Posts topicId={params.id} />
      </main>
      <Footer />
    </>
  );
}
