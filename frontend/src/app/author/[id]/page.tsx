import HomeHeader from '@/components/Header/HomeHeader';
import { Account } from '@/types/Account';
import { Post } from '@/types/Post';
import Image from 'next/image';
import React from 'react';
import defaultPicture from 'public/user.webp';
import PostLikeCount from '@/components/PostLikeCount';

interface Props {
  params: {
    id: string;
  }
}

type AuthorPostsResponse = {
  posts: Post[];
  likeCount: number;
  postCount: number;
};

export default async function AuthorPage({ params }: Props) {
  const authorResponse = await fetch(`http://backend:3001/accounts/${params.id}`);
  const author = await authorResponse.json() as Account;

  const postsResponse = await fetch(`http://backend:3001/posts/author/${params.id}`);
  const posts = await postsResponse.json() as AuthorPostsResponse;

  return (
    <>
      <HomeHeader />
      <main>
        <header className="bg-primaryGreen p-3 pt-8 sm:p-5 sm:pt-10">
          <div className="flex gap-6 items-center">
            <Image
              width={160}
              height={160}
              src={author.imageUrl ?? defaultPicture}
              alt="Imagem de perfil de username"
              className="w-36 h-36 shadow-2xl border-2 p-1 rounded-full object-cover"
            />

            <div className="space-y-2">
              <h1 className="font-semibold text-lg sm:text-2xl">{author.username}</h1>

              <PostLikeCount likeCount={posts.likeCount} postCount={posts.postCount} />
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
