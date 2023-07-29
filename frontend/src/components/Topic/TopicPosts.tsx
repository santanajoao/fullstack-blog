'use client';

import React, { useEffect, useState } from 'react';
import { Post } from '@/types/Post';
import { requestTopicPosts } from '@/services/posts';
import SectionListing from '@/components/SectionListing';
import PostItemLink from '../PostItemLink';
import PostList from '../PostList';

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
  const [posts, setPosts] = useState<Post[]>([]);

  const updatePosts = async () => {
    const topicPosts = await requestTopicPosts(topicId, filter);
    setPosts(topicPosts);
  };

  useEffect(() => {
    updatePosts();
  }, [filter]);

  return (
    <SectionListing.Article>
      <div className="space-x-5 pl-1">
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

      <PostList.List>
        {posts.map((post) => (
          <PostList.Item key={post.id}>
            <PostItemLink
              title={post.title}
              date={new Date(post.createdAt)}
              author={post.account.username}
              description={post.description}
              image={`${post.imageUrl}?size=599`}
              link={`/post/${post.id}`}
            />
          </PostList.Item>
        ))}
      </PostList.List>
    </SectionListing.Article>
  );
}
