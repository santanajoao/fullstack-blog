import React from 'react';
import TopicPosts from '@/components/TopicPosts';
import HomeHeader from '@/components/Header/HomeHeader';
import TopicHero from '@/components/TopicHero';
import Footer from '@/components/Footer';

interface Params {
  params: {
    id: string;
  };
}

export default async function Topic({ params }: Params) {
  return (
    <>
      <HomeHeader />
      <main>
        <TopicHero topicId={params.id} />

        <TopicPosts topicId={params.id} />
      </main>
      <Footer />
    </>
  );
}
