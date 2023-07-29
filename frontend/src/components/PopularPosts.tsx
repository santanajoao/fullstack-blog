import React from 'react';
import { Post } from '@/types/Post';
import PostItemLink from './PostItemLink';
import PostList from './PostList';
import SectionListing from './SectionListing';

export default async function PopularPosts() {
  const response = await fetch(
    'http://backend:3001/posts/popular?quantity=12',
    { next: { revalidate: 60 * 15 } }, // 15 minutos
  );
  const popularPosts: Post[] = await response.json();

  return (
    <section>
      <SectionListing.Title>
        Publicações em alta
      </SectionListing.Title>

      <PostList.List>
        {popularPosts.map((post) => (
          <PostList.Item key={post.id}>
            <PostItemLink
              author={post.account.username}
              date={new Date(post.createdAt)}
              description={post.description}
              image={`${post.imageUrl}?size=599`}
              title={post.title}
              link={`/post/${post.id}`}
            />
          </PostList.Item>
        ))}
      </PostList.List>
    </section>
  );
}
