import React from 'react';
import HomeHero from '@/components/HomeHero';
import Footer from '@/components/Footer';
import Topic from '@/components/Topic';
import HomeHeader from '@/components/Header/HomeHeader';
import SectionListing from '@/components/SectionListing';
import Post from '@/components/Post';

export default async function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeHero />
        <SectionListing.Article>
          <Topic.Popular />

          <Post.Popular />
        </SectionListing.Article>
      </main>

      <Footer />
    </>
  );
}
