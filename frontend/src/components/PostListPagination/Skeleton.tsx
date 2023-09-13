import React from 'react';
import PostList from '@/components/PostList';
import ItemLinkSkeleton from '../Post/ItemLinkSkeleton';

interface Props {
  items?: number;
}

export default function Skeleton({ items = 12 }: Props) {
  const itemList = new Array(items).fill(null);

  return (
    <PostList.List>
      {itemList.map(() => (
        <PostList.Item key={Math.random()}>
          <ItemLinkSkeleton />
        </PostList.Item>
      ))}
    </PostList.List>
  );
}
