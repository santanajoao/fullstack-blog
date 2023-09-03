import React from 'react';
import Container from '../Container';
import PostListPagination from '../PostListPagination';

export default function Popular() {
  return (
    <Container.Section>
      <Container.Title>
        Publicações em alta
      </Container.Title>

      <PostListPagination
        emptyPostsMessage="Tudo vazio por aqui. Seja o primeiro a publicar!"
        apiEndpoint="/posts/popular"
        quantity={12}
      />
    </Container.Section>
  );
}
