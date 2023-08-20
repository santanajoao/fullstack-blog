import ErrorMessage from '@/components/Sign/ErrorMessage';
import { Topic } from '@/types/Topic';
import React from 'react';

interface Props {
  topics: Topic[] | null;
  selectedTopics: Topic[];
  onChange: (topic: Topic) => void;
}

export default function TopicCheckList({ topics, selectedTopics, onChange }: Props) {
  if (!topics) {
    return <span className="text-sm">Buscando tópicos...</span>;
  }

  if (topics.length === 0) {
    return <ErrorMessage>Nenhum tópico encontrado</ErrorMessage>;
  }

  return (
    <ul className="flex overflow-x-auto gap-2 px-1 py-2 ">
      {topics.map((topic) => (
        <li key={topic.id}>
          <div className="relative">
            <input
              type="checkbox"
              name="tópico"
              className="peer sr-only absolute"
              id={topic.id}
              onChange={() => onChange(topic)}
              checked={selectedTopics.some((selectedTopic) => selectedTopic.id === topic.id)}
            />

            <label
              className="peer-focus:outline outline-primaryGreen peer-checked:bg-zinc-400 peer-checked:text-white bg-zinc-200 p-1 rounded-sm cursor-pointer"
              htmlFor={topic.id}
            >
              {topic.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
