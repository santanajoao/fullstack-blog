import { requestTopics } from '@/services/topic';
import { Topic } from '@/types/Topic';
import React, { useEffect, useState } from 'react';

export default function TopicInput() {
  const [query, setQuery] = useState('');
  const [topics, setTopics] = useState<Topic[]>([]);

  const fetchTopics = async () => {
    const response = await requestTopics(query);
    if (response.data) {
      setTopics(response.data);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Busque um tópico"
        className="text-sm outline-none w-full p-2 border-2 rounded-md"
      />

      {topics.length === 0 ? (
        <span className="font-medium text-sm text-red-400">Nenhum tópico encontrado</span>
      ) : (
        <ul className="flex overflow-x-auto gap-2 px-1 py-2 ">
          {topics.map((topic) => (
            <li key={topic.id}>
              <div className="relative">
                <input
                  type="checkbox"
                  name="tópico"
                  className="peer sr-only absolute"
                  id={topic.id}
                />

                <label
                  className="peer-focus:outline outline-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-white bg-zinc-200 p-1 rounded-sm cursor-pointer"
                  htmlFor={topic.id}
                >
                  {topic.name}
                </label>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
