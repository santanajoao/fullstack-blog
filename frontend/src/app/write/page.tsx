'use client';

import HomeHeader from '@/components/Header/HomeHeader';
import Sign from '@/components/Sign';
import ImageInput from '@/components/Write/ImageInput';
import MarkdownInput from '@/components/Write/MarkdownInput';
import Textarea from '@/components/Write/Textarea';
import { postSchema } from '@/lib/schemas/post.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type Fields = {
  title: string;
  description: string;
  content: string;
};

export default function WritePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Fields>({
    resolver: zodResolver(postSchema),
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const onSubmit = (data: Fields): void => {
    if (!imageFile) return;

    console.log({
      ...data,
      image: imageFile,
    });
  };

  const checkForImage = () => {
    if (!imageFile) {
      setImageError('A imagem do post é obrigatória');
    }
  };

  const handleImageChange = (image: File): void => {
    if (image) {
      setImageError(null);
      setImageFile(image);
    }
  };

  return (
    <>
      <HomeHeader />
      <main className="w-full max-w-2xl mx-auto py-5 px-4">
        <Sign.Form onSubmit={handleSubmit(onSubmit)}>
          <Sign.Field>
            <Textarea
              register={register}
              name="title"
              placeholder="Título"
              className="text-3xl font-bold"
            />
            <Sign.ErrorMessage>{errors.title?.message}</Sign.ErrorMessage>
          </Sign.Field>

          <Sign.Field>
            <Textarea
              register={register}
              name="description"
              placeholder="Descrição da sua publicação"
              rows={3}
            />
            <Sign.ErrorMessage>{errors.description?.message}</Sign.ErrorMessage>
          </Sign.Field>

          <Sign.Field>
            <ImageInput onImageChange={handleImageChange} />
            <Sign.ErrorMessage>{imageError}</Sign.ErrorMessage>
          </Sign.Field>

          <Sign.Field>
            <MarkdownInput value={watch('content')} register={register} name="content" />
            <Sign.ErrorMessage>{errors.content?.message}</Sign.ErrorMessage>
          </Sign.Field>

          <Sign.Button onClick={checkForImage} type="submit">Publicar</Sign.Button>
        </Sign.Form>
      </main>
    </>
  );
}
