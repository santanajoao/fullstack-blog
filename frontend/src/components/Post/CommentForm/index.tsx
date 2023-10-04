'use client';

import Textarea from '@/components/Profile/Textarea';
import React from 'react';
import Sign from '@/components/Sign';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { commentFieldsSchema } from '@/lib/schemas/comment.schema';

type CommentFields = {
  comment: string;
};

export default function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFields>({
    resolver: zodResolver(commentFieldsSchema),
  });

  const onSubmit = (fields: CommentFields): void => {
    console.log(fields);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        aria-label="Deixe seu comentário"
        placeholder="Deixe aqui seu comentário"
        name="comment"
        register={register}
      />

      <Sign.ErrorMessage>{errors.comment?.message}</Sign.ErrorMessage>

      <Sign.Button className="py-2 w-fit mt-1" type="submit">Comentar</Sign.Button>
    </form>
  );
}
