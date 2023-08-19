import React from 'react';
import { Account } from '@/types/Account';
import { TPost } from '@/types/Post';
import PostList from '@/components/PostList';
import Container from '../Container';
import PostItemLink from '../PostItemLink';

interface Props {
  posts: TPost[],
  author: Account;
}

export default function BestPosts({ posts, author }: Props) {
  return (
    <Container.Section>
      <Container.Title>Melhores publicações</Container.Title>

      <PostList.List>
        {posts.map((post) => (
          <PostList.Item key={post.id}>
            <PostItemLink
              title={post.title}
              date={new Date(post.createdAt)}
              author={author.username}
              description={post.description}
              image={post.imageUrl ?? `${post.imageUrl}?size=599`}
              link={`/post/${post.id}`}
            />
          </PostList.Item>
        ))}
      </PostList.List>
    </Container.Section>
  );
}
