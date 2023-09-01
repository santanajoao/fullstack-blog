import { TopicWithoutImage } from '@/types/Topic';
import React from 'react';

interface Props {
  topics: TopicWithoutImage[],
}

export default function SimpleTopicList({ topics }: Props) {
  return (
    <ul className="flex flex-wrap gap-1">
      {topics.map((topic) => (
        <li key={topic.id} className="text-sm font-medium px-2 py-1 rounded-md bg-gray-300">
          {topic.name}
        </li>
      ))}
    </ul>
  );
}
