'use client';

import React, { useState } from 'react';
import Container from '@/components/Container';
import PostListPagination from '../PostListPagination';

interface Props {
  topicId: string;
}

const options = [
  { value: 'popularity', content: 'Popularidade' },
  { value: 'likes', content: 'Likes' },
  { value: 'creation', content: 'Data de criação' },
];

export default function TopicPosts({ topicId }: Props) {
  const [filter, setFilter] = useState<string>(options[0].value);

  return (
    <Container.Article>
      <div className="gap-x-5 gap-y-2 flex flex-wrap pl-1 mb-3 sm:mb-5">
        <label htmlFor="sort-posts">Ordenar por:</label>
        <select
          name="filter"
          id="sort-posts"
          className="p-1 rounded-sm"
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        >
          {options.map(({ content, value }) => (
            <option key={value} value={value}>
              {content}
            </option>
          ))}
        </select>
      </div>

      <PostListPagination
        quantity={8}
        apiEndpoint={`/topics/${topicId}/posts`}
        orderBy={filter}
        emptyPostsMessage="Ainda não existem publicações para esse tópico. Seja o primeiro!"
      />
    </Container.Article>
  );
}
