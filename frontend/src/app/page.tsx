import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import PopularTopics from '@/components/PopularTopics';
import HomeHeader from '@/components/Header/HomeHeader';
import PostList from '@/components/PostList';

export default async function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <Hero />
        <section className="px-3 sm:px-5 py-4 sm:py-6 space-y-5">
          <PopularTopics />

          <article>
            <h2 className="font-bold text-lg sm:text-2xl">
              Publicações em alta
            </h2>
            
            <PostList postsEnpoint="/popular?quantity=12" />
          </article>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
