import React from 'react';

type Params = {
  postCount: number;
  likeCount: number;
  className?: string;
};

export default function PostLikeCount({
  postCount, likeCount, className = '',
}: Params) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <span className="text-sm">
        <span className="font-bold">{postCount}</span>
        {' '}
        postagens
      </span>

      <span className="text-sm">
        <span className="font-bold">{likeCount}</span>
        {' '}
        likes
      </span>
    </div>
  );
}
