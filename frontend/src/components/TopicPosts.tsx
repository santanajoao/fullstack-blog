'use client';

import { useEffect, useState } from "react";
import { Post } from "@/types/Post";
import { requestTopicPosts } from "@/services/posts";
import PostItemLink from "./PostItemLink";

interface Props {
  topicId: string;
}

export default function TopicPosts({ topicId }: Props) {
  const options = [
    { value: 'popularity', content: 'Popularidade' },
    { value: 'likes', content: 'Likes' },
    { value: 'creation', content: 'Data de criação' },
  ];

  const [filter, setFilter] = useState<string>(options[0].value);
  const [posts, setPosts] = useState<Post[]>([]);

  const updatePosts = async () => {
    const posts = await requestTopicPosts(topicId, filter);
    setPosts(posts);
  };

  useEffect(() => {
    updatePosts();
  }, [filter]);

  return (
    <div className="px-3 sm:px-5 pt-3 pb-5">
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

      <ul className="grid gap-5 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {posts.map((post) => (
          <li key={post.title} className="w-full max-w-2xl border-t hover:brightness-90 bg-white transition-[filter]">
            <PostItemLink
              title={post.title}
              date={new Date(post.createdAt)}
              author={post.account.username}
              description={post.description}
              image={`${post.imageUrl}?size=599`}
              link={`/posts/${post.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
