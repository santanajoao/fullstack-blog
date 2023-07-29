import React from 'react';
import HomeHero from '@/components/HomeHero';
import Footer from '@/components/Footer';
import PopularTopics from '@/components/Topic/PopularTopics';
import HomeHeader from '@/components/Header/HomeHeader';
import PopularPosts from '@/components/PopularPosts';
import SectionListing from '@/components/SectionListing';

export default async function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeHero />
        <SectionListing.Article>
          <PopularTopics />

          <PopularPosts />
        </SectionListing.Article>
      </main>

      <Footer />
    </>
  );
}
