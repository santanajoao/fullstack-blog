'use client';

import React, { useEffect, useRef, useState } from 'react';
import Sign from '@/components/Sign';
import defaultProfile from '@/assets/profile.svg';
import { aboutMaxLength, profilePersonalSchema } from '@/lib/schemas/account.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUser } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';
import Textarea from './Textarea';
import ImageInput, { ImageChangeProps } from './ImageInput';

type Fields = {
  imageUrl: string;
  username: string;
  about: string;
};

export default function PersonalInfosForm() {
  const [editing, setEditing] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    user, updateProfile, error, clearError,
  } = useUser();
  const firstInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
    setValue,
    watch,
  } = useForm<Fields>({
    defaultValues: {
      about: user?.about ?? '',
      username: user?.username ?? '',
      imageUrl: user?.imageUrl ?? defaultProfile,
    },
    resolver: zodResolver(profilePersonalSchema),
  });

  useEffect(() => {
    if (editing) {
      firstInputRef.current?.focus();
    }
  }, [editing]);

  const clearAllErrors = () => {
    setEditing(false);
    clearErrors();
    clearError();
  };

  const cancelEditing = () => {
    clearAllErrors();
    reset();
  };

  const handleImageChange = ({ file, url }: ImageChangeProps) => {
    setImageFile(file);
    setValue('imageUrl', url);
  };

  const onSubmit = async ({ username, about }: Fields) => {
    const success = await updateProfile({
      username,
      about,
      image: imageFile,
    });

    if (success) {
      setEditing(false);
      toast.success('Informações atualizadas!');
    }
  };

  return (
    <Sign.Form onSubmit={handleSubmit(onSubmit)}>
      <Sign.Field>
        <Sign.Label htmlFor="image-input">Imagem de perfil</Sign.Label>
        <ImageInput
          disabled={!editing}
          id="image-input"
          value={watch('imageUrl') || defaultProfile}
          _ref={firstInputRef}
          onChange={handleImageChange}
        />
      </Sign.Field>

      <Sign.FieldsWrapper className="w-full">
        <Sign.Field>
          <Sign.Label htmlFor="username-input">Usuário</Sign.Label>
          <Sign.Input
            type="text"
            id="username-input"
            name="username"
            register={register}
            disabled={!editing}
          />
          <Sign.ErrorMessage>{errors.username?.message}</Sign.ErrorMessage>
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="about-input">Sobre</Sign.Label>
          <Textarea
            id="about-input"
            maxLength={aboutMaxLength}
            name="about"
            register={register}
            disabled={!editing}
            placeholder={user?.about || 'Esse usuário ainda não definiu um "about"'}
          />
          <Sign.ErrorMessage>
            {errors.about?.message}
          </Sign.ErrorMessage>
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.ErrorMessage>{error}</Sign.ErrorMessage>
      <div className="space-x-2">
        {editing && (
          <Sign.Button
            className="py-2"
            type="submit"
            key="save-changes-button"
          >
            Salvar
          </Sign.Button>
        )}

        {!editing && (
          <Sign.Button
            className="py-2"
            type="button"
            key="edit-infos-button"
            onClick={() => setEditing(true)}
          >
            Editar
          </Sign.Button>
        )}

        {editing && (
          <Sign.Button
            onClick={cancelEditing}
            className="py-2 bg-zinc-300"
            type="button"
          >
            Cancelar
          </Sign.Button>
        )}
      </div>
    </Sign.Form>
  );
}
