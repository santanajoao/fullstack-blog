import React from 'react';
import { Account } from '@/types/Account';
import Container from '../Container';

interface Props {
  author: Account;
}

export default function About({ author }: Props) {
  return (
    <Container.Section>
      <Container.Title>
        Sobre
        {' '}
        {author.username}
      </Container.Title>

      <p className="max-w-2xl">
        {author.about ?? 'Esse autor ainda não definiu um "sobre"'}
      </p>
    </Container.Section>
  );
}
