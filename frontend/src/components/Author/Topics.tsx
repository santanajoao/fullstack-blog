import React from 'react';
import { Topic } from '@/types/Topic';
import Container from '../Container';

export default function Topics({ topics }: { topics: Topic[] }) {
  return (
    <Container.Section>
      <Container.Title>Fala sobre</Container.Title>

      <ul className="flex flex-wrap gap-1">
        {topics.map((topic) => (
          <li key={topic.id} className="text-sm font-medium px-2 py-1 rounded-md bg-gray-300">
            {topic.name}
          </li>
        ))}
      </ul>
    </Container.Section>
  );
}
