import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import PopularTopics from '@/components/PopularTopics';
import PopularPosts from '@/components/PopularPosts';

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="px-3 sm:px-5 py-4 sm:py-6 space-y-5">
          <PopularTopics />

          <PopularPosts />
        </section>
      </main>
      
      <Footer />
    </>
  )
}
