import React from 'react';
import { Topic } from '@/types/Topic';
import TopicLink from './TopicLink';
import Container from '../Container';
import { serverApiUrl } from '@/services/constants';

export default async function PopularTopics() {
  const response = await fetch(
    `${serverApiUrl}/topics/popular?quantity=12`,
  );
  const popularTopics: Topic[] = await response.json();

  return (
    <Container.Section>
      <Container.Title>
        Explore os tópicos mais falados
      </Container.Title>

      <ul className="grid grid-flow-col grid-rows-3 gap-2 sm:grid-rows-2 lg:grid-rows-1">
        {popularTopics.map(({ name, id, imageUrl }) => (
          <li key={id} className="w-full aspect-square rounded-2xl overflow-hidden relative group">
            <TopicLink image={`${imageUrl}?size=320`} link={`/topic/${id}`} topic={name} />
          </li>
        ))}
      </ul>
    </Container.Section>
  );
}
