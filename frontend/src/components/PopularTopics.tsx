import React from 'react';
import { Topic } from '@/types/Topic';
import TopicLink from './TopicLink';

export default async function PopularTopics() {
  const response = await fetch(
    'http://backend:3001/topics/popular?quantity=12',
    { next: { revalidate: 60 * 30 } },
  );
  const popularTopics: Topic[] = await response.json();

  return (
    <article>
      <h2 className="font-bold text-lg sm:text-2xl">
        Explore os tópicos mais falados
      </h2>

      <ul className="mt-3 grid grid-flow-col grid-rows-3 gap-2 sm:grid-rows-2 lg:grid-rows-1">
        {popularTopics.map(({ name, id, imageUrl }) => (
          <li key={id} className="w-full aspect-square rounded-2xl overflow-hidden relative group">
            <TopicLink image={`${imageUrl}?size=320`} link={`/topic/${id}`} topic={name} />
          </li>
        ))}
      </ul>
    </article>
  );
}
