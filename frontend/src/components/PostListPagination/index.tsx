'use client';

import React, { useEffect, useState } from 'react';
import { TPost } from '@/types/Post';
import { requestPosts } from '@/services/posts';
import { toast } from 'react-toastify';
import PostList from '../PostList';
import PostItemLink from '../PostItemLink';

interface Props {
  apiEndpoint: string;
  quantity: number;
}

export default function PostListPagination({ apiEndpoint, quantity }: Props) {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [postsEnded, setPostsEnded] = useState(false);

  const getPosts = async (): Promise<any> => {
    const response = await requestPosts({ endpoint: apiEndpoint, page, quantity });
    if (!response.success) {
      return toast.error(response.message);
    }

    if (response.data.length === 0) {
      setPostsEnded(true);
      return toast.info('Não há mais publicações');
    }

    return setPosts((prev) => [...prev, ...response.data]);
  };

  useEffect(() => {
    getPosts();
  }, [page]);

  return (
    <div className="flex flex-col space-y-3">
      <PostList.List>
        {posts.map((post) => (
          <PostList.Item key={post.id}>
            <PostItemLink
              author={post.account.username}
              date={new Date(post.createdAt)}
              description={post.description}
              image={post.imageUrl ?? `${post.imageUrl}?size=599`}
              title={post.title}
              link={`/post/${post.id}`}
            />
          </PostList.Item>
        ))}
      </PostList.List>

      {!postsEnded && (
        <button
          type="button"
          className="border-zinc-300 border rounded-md py-2 px-4 hover:bg-zinc-300 font-bold"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Ver mais
        </button>
      )}
    </div>
  );
}
