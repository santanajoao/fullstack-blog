import React from 'react';
import TopicPosts from '@/components/Topic/TopicPosts';
import HomeHeader from '@/components/Header/HomeHeader';
import TopicHero from '@/components/Topic/TopicHero';
import Footer from '@/components/Footer';
import { requestTopicInfos } from '@/services/topic';
import RequestError from '@/components/Topic/RequestError';

interface Params {
  params: {
    id: string;
  };
}

export default async function Topic({ params }: Params) {
  const response = await requestTopicInfos(params.id);
  if (!response.success) {
    return <RequestError status={response.status} message={response.message} />;
  }

  const { posts, topic } = response.data;

  return (
    <>
      <HomeHeader />
      <main>
        <TopicHero posts={posts} topic={topic} />

        <TopicPosts topicId={params.id} />
      </main>
      <Footer />
    </>
  );
}
