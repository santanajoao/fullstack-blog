'use client';

import ErrorMessage from '@/components/Sign/ErrorMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

export type CommentFields = {
  comment: string;
};

interface Props {
  initialValues?: CommentFields,
  onCancel: () => void;
  onSave: (fields: CommentFields) => void | Promise<void>;
}

const defaultValues: CommentFields = {
  comment: '',
};

export default function EditionForm({
  initialValues = defaultValues,
  onCancel,
  onSave,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFields>({
    resolver: zodResolver(commentFieldsSchema),
    values: initialValues,
  });

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSave)}>
      <textarea
        placeholder="Seu novo comentário"
        className="py-1 px-3 bg-transparent w-full resize-none border-b-2 border-black/10"
        autoFocus
        {...register('comment')}
      />

      <div className="p-2 flex items-center justify-between">
        <div className="space-x-2">
          <button
            type="submit"
            className="p-1 bg-primaryGreen rounded-sm"
          >
            Salvar
          </button>

          <button
            onClick={onCancel}
            type="button"
            className="bg-black/20 p-1 rounded-sm"
          >
            Cancelar
          </button>
        </div>

        <ErrorMessage>{errors.comment?.message}</ErrorMessage>
      </div>
    </form>
  );
}
