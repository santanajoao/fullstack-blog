'use client';

import HomeHeader from '@/components/Header/HomeHeader';
import Sign from '@/components/Sign';
import ImageInput from '@/components/Write/ImageInput';
import MarkdownInput from '@/components/Write/MarkdownInput';
import MarkdownTutorialModal from '@/components/Write/MarkdownTutorialModal';
import Textarea from '@/components/Write/Textarea';
import TopicInput from '@/components/Write/TopicInput';
import { useUser } from '@/contexts/AuthContext';
import { getCookie } from '@/lib/cookies';
import { postSchema } from '@/lib/schemas/post.schema';
import { createPost } from '@/services/posts';
import { TPostCreation } from '@/types/Post';
import { Topic } from '@/types/Topic';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function WritePage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<TPostCreation>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      topics: [],
      content: '',
    },
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const { isLoading, user, authorize } = useUser();
  const router = useRouter();

  useEffect(() => {
    authorize({ required: true, redirectTo: '/signup' });
  }, [user, isLoading]);

  const onSubmit = async (
    data: TPostCreation,
    event: BaseSyntheticEvent | any,
  ): Promise<void> => {
    const token = getCookie('blog.session.token');

    if (!token || imageError) return;
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('image', imageFile as File);
    formData.append('topics', JSON.stringify(data.topics));

    const response = await createPost(formData, token);

    if (response.success) {
      router.push(`post/${response.data?.id}`);
    } else {
      setGeneralError(response.message);
    }
  };

  const checkForImage = () => {
    if (!imageFile) {
      setImageError('A imagem do post é obrigatória');
    } else {
      setImageError(null);
    }
  };

  const handleImageChange = (image: File): void => {
    if (image) {
      setImageError(null);
      setImageFile(image);
    }
  };

  const handleTopicsChange = (topics: Topic[]) => {
    const topicIds = topics.map((topic) => topic.id);
    setValue('topics', topicIds, { shouldValidate: true });
  };

  if (isLoading || !user) return null;

  return (
    <>
      <MarkdownTutorialModal />
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
            <TopicInput onChange={handleTopicsChange} />
            <Sign.ErrorMessage>{errors.topics?.message}</Sign.ErrorMessage>
          </Sign.Field>

          <Sign.Field>
            <ImageInput onImageChange={handleImageChange} />
            <Sign.ErrorMessage>{imageError}</Sign.ErrorMessage>
          </Sign.Field>

          <Sign.Field>
            <MarkdownInput value={watch('content')} register={register} name="content" />
            <Sign.ErrorMessage>{errors.content?.message}</Sign.ErrorMessage>
          </Sign.Field>

          <Sign.ErrorMessage>{generalError}</Sign.ErrorMessage>

          <Sign.Button onClick={checkForImage} type="submit">Publicar</Sign.Button>
        </Sign.Form>
      </main>
    </>
  );
}
