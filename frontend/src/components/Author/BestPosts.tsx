import React from 'react';
import { Account } from '@/types/Account';
import { Post } from '@/types/Post';
import PostList from '@/components/PostList';
import SectionListing from '../SectionListing';
import PostItemLink from '../PostItemLink';

interface Props {
  posts: Post[],
  author: Account;
}

export default function BestPosts({ posts, author }: Props) {
  return (
    <section>
      <SectionListing.Title>Melhores publicações</SectionListing.Title>

      <PostList.List>
        {posts.map((post) => (
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
  );
}