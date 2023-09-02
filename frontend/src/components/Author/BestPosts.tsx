import React from 'react';
import { Account } from '@/types/Account';
import Container from '../Container';
import PostListPagination from '../PostListPagination';

interface Props {
  author: Account;
}

export default function BestPosts({ author }: Props) {
  return (
    <Container.Section>
      <Container.Title>Publicações</Container.Title>

      <PostListPagination
        apiEndpoint={`/posts/account/${author.id}`}
        quantity={4}
      />
    </Container.Section>
  );
}
