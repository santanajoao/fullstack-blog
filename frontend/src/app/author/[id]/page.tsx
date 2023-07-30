import HomeHeader from '@/components/Header/HomeHeader';
import { Account } from '@/types/Account';
import { Post } from '@/types/Post';
import Image from 'next/image';
import React from 'react';
import defaultPicture from 'public/user.webp';
import PostLikeCount from '@/components/PostLikeCount';
import PostList from '@/components/PostList';
import PostItemLink from '@/components/PostItemLink';
import SectionListing from '@/components/SectionListing';
import { Topic } from '@/types/Topic';

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

type Responses = [Account, AuthorPostsResponse, Topic[]];

export default async function AuthorPage({ params }: Props) {
  const [author, posts, topics]: Responses = await Promise.all([
    fetch(`http://backend:3001/accounts/${params.id}`).then((res) => res.json()),
    fetch(`http://backend:3001/posts/account/${params.id}`).then((res) => res.json()),
    fetch(`http://backend:3001/topics/account/${params.id}`).then((res) => res.json()),
  ]);

  return (
    <>
      <HomeHeader />
      <main>
        <header className="relative bg-primaryGreen px-3 pt-5 sm:px-5 sm:pt-7 flex gap-3 sm:gap-5 items-end mb-8">
          <Image
            width={160}
            height={160}
            src={author.imageUrl ?? defaultPicture}
            alt="Imagem de perfil de username"
            className="h-40 w-40 relative top-8 bg-gray-300 rounded-xl object-cover border-2 border-white"
          />

          <div className="pb-6 sm:pb-8 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold">{author.username}</h1>

            <PostLikeCount likeCount={posts.likeCount} postCount={posts.postCount} />
          </div>
        </header>

        <SectionListing.Article>
          <section>
            <SectionListing.Title>Fala sobre</SectionListing.Title>
            

            <ul className="flex flex-wrap gap-1">
              {topics.map((topic) => (
                <li key={topic.id} className="text-sm font-medium px-2 py-1 rounded-md bg-gray-300">
                  {topic.name}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <SectionListing.Title>Melhores publicações</SectionListing.Title>

            <PostList.List>
              {posts.posts.map((post) => (
                <PostList.Item key={post.id}>
                  <PostItemLink
                    title={post.title}
                    date={new Date(post.createdAt)}
                    author={author.username}
                    description={post.description}
                    image={`${post.imageUrl}?size=599`}
                    link={`/post/${post.id}`}
                  />
                </PostList.Item>
              ))}
            </PostList.List>
          </section>
        </SectionListing.Article>
      </main>
    </>
  );
}
