'use client';

import HomeHeader from '@/components/Header/HomeHeader';
import Sign from '@/components/Sign';
import ImageInput from '@/components/Write/ImageInput';
import MarkdownInput from '@/components/Write/MarkdownInput';
import Textarea from '@/components/Write/Textarea';
import { getCookie } from '@/lib/cookies';
import { postSchema } from '@/lib/schemas/post.schema';
import { createPost } from '@/services/posts';
import { TPostCreation } from '@/types/Post';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function WritePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TPostCreation>({
    resolver: zodResolver(postSchema),
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: TPostCreation): Promise<void> => {
    const token = getCookie('blog.session.token');
    if (token) {
      const response = await createPost(data, token);
      router.push(`post/${response.data?.id}`);
    }
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
