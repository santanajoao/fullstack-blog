import React from 'react';
import TopicLink from './TopicLink';
import Container from '../Container';
import { requestPopularTopics } from '@/services/topic';

export default async function PopularTopics() {
  const response = await requestPopularTopics(12);

  // emitir um toast e exibir um skeleton
  if (!response.success) return null;

  const popularTopics = response.data;

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
