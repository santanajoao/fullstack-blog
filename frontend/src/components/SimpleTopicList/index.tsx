import { TopicWithoutImage } from '@/types/Topic';
import Link from 'next/link';
import React from 'react';

interface Props {
  topics: TopicWithoutImage[],
}

export default function SimpleTopicList({ topics }: Props) {
  return (
    <ul className="flex flex-wrap gap-1">
      {topics.map((topic) => (
        <li key={topic.id}>
          <Link href={`/topic/${topic.id}`} className="text-sm font-medium px-2 py-1 rounded-md bg-gray-300">
            {topic.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
