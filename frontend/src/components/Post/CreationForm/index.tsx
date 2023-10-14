'use client';

import Textarea from '@/components/Profile/Textarea';
import React, { FormEventHandler, useState } from 'react';
import Sign from '@/components/Sign';
import { commentMaxLength, commentMinLength } from '@/lib/schemas/comment.schema';

type FormFunctions = {
  clearError: () => void;
  setError: (error: string) => void;
};

export type CommentCreationHandler = (
  comment: string, functions: FormFunctions
) => void | Promise<void>;

interface Props {
  onSubmit: CommentCreationHandler;
}

export default function CommentForm({ onSubmit }: Props) {
  const [comment, setComment] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const clearError = () => setSubmitError(null);
  const setError = (error: string) => setSubmitError(error);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSubmit(comment, { clearError, setError });
  };

  const isDisabled = comment.length < commentMinLength
    || comment.length > commentMaxLength;

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <Textarea
        aria-label="Deixe seu comentário"
        placeholder="Deixe aqui seu comentário"
        name="comment"
        onChange={(e) => setComment(e.target.value)}
      />

      <Sign.ErrorMessage>{submitError}</Sign.ErrorMessage>

      <Sign.Button disabled={isDisabled} className="py-2 w-fit mt-1" type="submit">Comentar</Sign.Button>
    </form>
  );
}
