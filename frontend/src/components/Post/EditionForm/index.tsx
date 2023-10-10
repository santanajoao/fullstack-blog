'use client';

import ErrorMessage from '@/components/Sign/ErrorMessage';
import { commentFieldsSchema } from '@/lib/schemas/comment.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

export type FormFields = {
  comment: string;
};

interface Props {
  initialValues?: FormFields,
  onCancel: () => void;
  onSave: (fields: FormFields) => void;
}

const defaultValues: FormFields = {
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
  } = useForm<FormFields>({
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
