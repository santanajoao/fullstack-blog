import React from 'react';
import HomeHero from '@/components/HomeHero';
import Footer from '@/components/Footer';
import PopularTopics from '@/components/Topic/PopularTopics';
import HomeHeader from '@/components/Header/HomeHeader';
import PopularPosts from '@/components/PopularPosts';

export default async function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeHero />
        <section className="px-3 sm:px-5 py-4 sm:py-6 space-y-5">
          <PopularTopics />

          <PopularPosts />
        </section>
      </main>

      <Footer />
    </>
  );
}
