import React from 'react';
import { Topic } from '@/types/Topic';
import Container from '../Container';
import SimpleTopicList from '../SimpleTopicList';

export default function Topics({ topics }: { topics: Topic[] }) {
  return (
    <Container.Section>
      <Container.Title>Fala sobre</Container.Title>

      {topics.length === 0 ? (
        <p>Esse autor ainda não publicou sobre nenhum tópico</p>
      ) : (
        <SimpleTopicList topics={topics} />
      )}
    </Container.Section>
  );
}
