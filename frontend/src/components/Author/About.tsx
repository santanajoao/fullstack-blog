import React from 'react';
import { Account } from '@/types/Account';
import SectionListing from '../SectionListing';

interface Props {
  author: Account;
}

export default function About({ author }: Props) {
  return (
    <section>
      <SectionListing.Title>
        Sobre
        {' '}
        {author.username}
      </SectionListing.Title>

      <p className="max-w-2xl">
        {author.about ?? 'Esse autor ainda não definiu um "sobre"'}
      </p>
    </section>
  );
}
