'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/PostListPagination/Button';
import { useUser } from '@/contexts/AuthContext';
import CreationForm from '../CreationForm';
import CommentCard from '../CommentCard';
import { Comment } from '@/types/Comment';
import { requestDeleteCommentById, requestPostComments, requestPutCommentById } from '@/services/posts';
import { toast } from 'react-toastify';
import { getCookie } from '@/lib/cookies';
import { CommentFields } from '../EditionForm';

interface Props {
  postId: string;
}

export default function CommentSection({ postId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState(0);
  const [commentsEnded, setCommentsEnded] = useState(false);
  const commentQuantity = 6;

  const { user } = useUser();

  const fetchComments = async () => {
    const response = await requestPostComments(
      postId, { page, quantity: commentQuantity },
    );

    if (!response.success) return toast.error(response.message);
    if (response.data.length === 0 || response.data.length < commentQuantity) {
      setCommentsEnded(true);
    }
    setComments(response.data);
  };

  const appendComments = async () => {
    if (!comments || comments.length === 0) return;

    const response = await requestPostComments(
      postId, { page, quantity: commentQuantity },
    );

    if (!response.success) return toast.error(response.message);
    if (response.data.length < commentQuantity) setCommentsEnded(true);
    if (response.data.length === 0) return toast.info('Não há mais comentários');

    setComments((prev) => [...prev, ...response.data]);
  };

  const handleDelete = async (commentId: string) => {
    const token = getCookie('blog.session.token');
    const response = await requestDeleteCommentById(token || '', commentId);

    if (response.success) {
      setComments((prev) => prev.filter((comment) => comment.id !== commentId));
    } else {
      toast.error('Erro ao apagar comentário');
    }
  };

  const handleEdit = async (
    id: string, fields: CommentFields,
  ): Promise<boolean> => {
    const token = getCookie('blog.session.token');
    const response = await requestPutCommentById(token || '', id, fields.comment);

    if (response.success) {
      setComments((prev) => prev.map(
        (comment) => comment.id === id ? response.data : comment),
      );
      return true;
    }

    toast.error('Erro ao editar comentário');
    return false;
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    appendComments();
  }, [page]);

  return (
    <section className="mt-10">
      <header className="flex items-center p-1 border-t-2 border-black/10 justify-between">
        <h2 className="text-xl font-bold">Comentários</h2>
        <span className="font-medium text-sm">
          {comments.length}
          {' '}
          Comentários
        </span>
      </header>

      <CreationForm />

      <ul className="mt-4 flex flex-col gap-2">
        {comments.map((comment) => (
          <li key={comment.id}>
            <CommentCard
              showActions={user?.id === comment.account.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
              comment={comment}
            />
          </li>
        ))}
      </ul>

      {!commentsEnded && (
        <Button type="button" onClick={() => setPage((prev) => prev + 1)}>
          Ver mais comentários
        </Button>
      )}
    </section>
  );
}
