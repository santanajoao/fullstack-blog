import React from 'react';
import { TPost } from '@/types/Post';
import PostItemLink from '../PostItemLink';
import PostList from '../PostList';
import Container from '../Container';

export default async function Popular() {
  const response = await fetch(
    'http://backend:3001/posts/popular?quantity=12',
    { next: { revalidate: 60 * 15 } }, // 15 minutos
  );
  const popularPosts: TPost[] = await response.json();

  return (
    <Container.Section>
      <Container.Title>
        Publicações em alta
      </Container.Title>

      <PostList.List>
        {popularPosts.map((post) => (
          <PostList.Item key={post.id}>
            <PostItemLink
              author={post.account.username}
              date={new Date(post.createdAt)}
              description={post.description}
              image={post.imageUrl ?? `${post.imageUrl}?size=599`}
              title={post.title}
              link={`/post/${post.id}`}
            />
          </PostList.Item>
        ))}
      </PostList.List>
    </Container.Section>
  );
}
