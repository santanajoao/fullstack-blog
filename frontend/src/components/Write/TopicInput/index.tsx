import { requestTopics } from '@/services/topic';
import { Topic } from '@/types/Topic';
import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import TopicCheckList from './TopicCheckList';

interface Props {
  onChange?: (selectedTopics: Topic[]) => void;
}

export default function TopicInput({ onChange }: Props) {
  const [query, setQuery] = useState('');
  const [topics, setTopics] = useState<Topic[] | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);

  const fetchTopics = async () => {
    const idsToExclude = selectedTopics.map((topic) => topic.id);
    const response = await requestTopics(query, idsToExclude);
    if (response.data) {
      setTopics(response.data);
    }
  };

  const handleTopicChange = (
    clickedTopic: Topic,
  ) => {
    const selected = selectedTopics
      .some((topic) => topic.id === clickedTopic.id);
    let newSelectedTopics: Topic[] = [];

    if (selected) {
      newSelectedTopics = selectedTopics
        .filter((topic) => topic.id !== clickedTopic.id);
    } else {
      newSelectedTopics = [...selectedTopics, clickedTopic];
    }

    setSelectedTopics(newSelectedTopics);

    if (onChange) onChange(newSelectedTopics);
  };

  useEffect(() => {
    fetchTopics();
  }, [query, selectedTopics]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Busque um tópico"
        className="text-sm outline-none w-full p-2 border-2 rounded-md"
      />

      {selectedTopics.length !== 0 && (
        <ul className="flex overflow-x-auto gap-2 px-1 py-2 ">
          {selectedTopics.map((topic) => (
            <li key={topic.id}>
              <div className="relative">
                <input
                  type="checkbox"
                  name="tópico"
                  className="peer sr-only absolute"
                  id={topic.id}
                  onChange={() => handleTopicChange(topic)}
                  checked
                />

                <label
                  className="flex items-center peer-focus:outline outline-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-white bg-zinc-200 p-1 rounded-sm cursor-pointer"
                  htmlFor={topic.id}
                >
                  <IoMdClose aria-hidden className="text-xs text-red-400" />
                  <span className="sr-only">Remover tópico</span>
                  &nbsp;
                  <span>{topic.name}</span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      )}

      <TopicCheckList
        topics={topics}
        onChange={handleTopicChange}
        selectedTopics={selectedTopics}
      />
    </div>
  );
}
