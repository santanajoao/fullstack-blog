import HomeHeader from '@/components/Header/HomeHeader'
import PostList from '@/components/PostList';
import React from 'react'

interface Params {
  params: {
    id: string;
  };
}

export default function Topic({ params }: Params) {
  return (
    <>
      <HomeHeader />
      <main>
        <header className="bg-zinc-700 px-4 sm:px-6 py-10 bg-cover text-white space-y-2">
          <h1 className="font-bold text-lg sm:text-2xl">
            Publicações sobre:
            &nbsp;
            <span className="underline font-normal">computação</span>
          </h1>

          <div className="flex gap-4">
            <span className="text-sm">
              <span className="font-bold">26</span> postagens
            </span>
            
            <span className="text-sm">
              <span className="font-bold">394</span> likes
            </span>
          </div>
        </header>

        <div className="px-3 sm:px-5">
          <PostList postsEnpoint="/popular" />
        </div>
      </main>
    </>
  )
}
