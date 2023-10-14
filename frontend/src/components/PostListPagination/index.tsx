'use client';

import React, { useEffect, useState } from 'react';
import { TPost } from '@/types/Post';
import { requestPosts } from '@/services/posts';
import { toast } from 'react-toastify';
import PostList from '../PostList';
import PostItemLink from '../PostItemLink';
import Skeleton from './Skeleton';
import Button from './Button';

interface Props {
  apiEndpoint: string;
  quantity: number;
  emptyPostsMessage: string;
  orderBy?: string;
}

export default function PostListPagination({
  apiEndpoint, quantity, orderBy, emptyPostsMessage,
}: Props) {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [postsEnded, setPostsEnded] = useState(false);

  const fetchPosts = async (): Promise<TPost[] | null> => {
    const response = await requestPosts({
      endpoint: apiEndpoint, page, quantity, orderBy,
    });
    setLoading(false);

    if (!response.success) { toast.error(response.message); return null; }
    if (response.data.length < quantity) setPostsEnded(true);
    return response.data;
  };

  const getPosts = async (): Promise<any> => {
    const fetchedPosts = await fetchPosts();
    if (fetchedPosts) setPosts(fetchedPosts);
  };

  const appendPosts = async () => {
    if (!posts.length) return;

    const fetchedPosts = await fetchPosts();
    if (!fetchedPosts) return;

    if (fetchedPosts.length > 0) {
      setPosts((prev) => [...prev, ...fetchedPosts]);
    } else {
      toast.info('Não há mais publicações');
    }
  };

  useEffect(() => {
    appendPosts();
  }, [page]);

  useEffect(() => {
    getPosts();
  }, [orderBy]);

  if (loading) return <Skeleton items={9} />;
  if (posts.length === 0 && postsEnded) return <p>{emptyPostsMessage}</p>;

  const showMoreButton = posts.length > 0 && !postsEnded;

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

      {showMoreButton && (
        <Button type="button" onClick={() => setPage((prev) => prev + 1)}>
          Ver mais
        </Button>
      )}
    </div>
  );
}
