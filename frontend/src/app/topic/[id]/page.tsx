import React from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import Footer from '@/components/Footer';
import { requestTopicInfos } from '@/services/topic';
import RequestError from '@/components/Topic/RequestError';
import Topic from '@/components/Topic';

interface Params {
  params: {
    id: string;
  };
}

export default async function TopicPage({ params }: Params) {
  const response = await requestTopicInfos(params.id);
  if (!response.success) {
    return <RequestError status={response.status} message={response.message} />;
  }

  const { posts, topic } = response.data;

  return (
    <>
      <HomeHeader />
      <main>
        <Topic.Hero posts={posts} topic={topic} />

        <Topic.Posts topicId={params.id} />
      </main>
      <Footer />
    </>
  );
}
