'use client';

import React from 'react';
import Button from '@/components/PostListPagination/Button';
import profilePicture from '@/assets/profile.svg';
import { useUser } from '@/contexts/AuthContext';
import CommentForm from '../CommentForm';
import CommentCard from '../CommentCard';

const commentsMock = [
  {
    id: 'kajsd9123ksja91',
    username: 'Maria Carla',
    comment: 'Que post legal! Continue postando.',
    authorId: '1kasdjasd123',
    upvotes: 2,
    profilePicture,
  },
  {
    id: '19asjdk012jkasd0',
    username: 'Zeca Pagodinho',
    comment: 'Agora eu começo a fazer minhas publicações',
    authorId: 'kaskjd12jkask',
    upvotes: 3,
    profilePicture,
  },
  {
    id: 'jasdkj912jkas',
    username: 'MrBlog',
    comment: 'Meu post é muito bom, né?',
    upvotes: 0,
    authorId: '30758187-bd56-4230-94fe-504c921e72e5',
    profilePicture,
  },
  {
    id: 'kascxm4i19xjk',
    username: 'Jhon Doe',
    comment: 'No hablo português. Didnt understand',
    authorId: 'asjkdjaad',
    upvotes: 1,
    profilePicture,
  },
  {
    id: 'askjk19jsd91j',
    username: 'MrBlog',
    comment: 'Me again',
    upvotes: 0,
    authorId: '30758187-bd56-4230-94fe-504c921e72e5',
    profilePicture,
  },
];

export default function CommentSection() {
  const { user } = useUser();

  return (
    <section className="mt-10">
      <header className="flex items-center p-1 border-t-2 border-black/10 justify-between">
        <h2 className="text-xl font-bold">Comentários</h2>
        <span className="font-medium text-sm">
          {commentsMock.length}
          {' '}
          Comentários
        </span>
      </header>

      <CommentForm />

      <ul className="mt-4 flex flex-col gap-2">
        {commentsMock.map((comment) => (
          <li key={comment.id}>
            <CommentCard
              authorId={comment.authorId}
              showActions={user?.id === comment.authorId}
              username={comment.username}
              profilePicture={comment.profilePicture}
              comment={comment.comment}
              upvotes={comment.upvotes}
            />
          </li>
        ))}
      </ul>

      <Button type="button">
        Ver mais comentários
      </Button>
    </section>
  );
}
