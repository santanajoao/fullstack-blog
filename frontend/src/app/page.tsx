import React from 'react';
import HomeHero from '@/components/HomeHero';
import Footer from '@/components/Footer';
import Topic from '@/components/Topic';
import HomeHeader from '@/components/Header/HomeHeader';
import Container from '@/components/Container';
import Post from '@/components/Post';

export default async function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeHero />
        <Container.Article>
          <Topic.Popular />

          <Post.Popular />
        </Container.Article>
      </main>

      <Footer />
    </>
  );
}
