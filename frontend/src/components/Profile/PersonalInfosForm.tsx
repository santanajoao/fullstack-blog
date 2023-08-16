'use client';

import React, {
  useEffect, useRef, useState,
} from 'react';
import Sign from '@/components/Sign';
import defaultProfile from 'public/profile.svg';
import { aboutMaxLength, profilePersonalSchema } from '@/lib/schemas/account.schema';
import { useForm } from 'react-hook-form';
import { Account } from '@/types/Account';
import { zodResolver } from '@hookform/resolvers/zod';
import Textarea from './Textarea';
import ImageInput from './ImageInput';

interface Props {
  user: Account;
}

type Fields = {
  imageUrl: string;
  username: string;
  about: string;
};

export default function PersonalInfosForm({ user }: Props) {
  const [editing, setEditing] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>({
    defaultValues: {
      about: user.about ?? '',
      username: user.username ?? '',
      imageUrl: user.imageUrl ?? defaultProfile,
    },
    resolver: zodResolver(profilePersonalSchema),
  });

  useEffect(() => {
    if (editing) {
      firstInputRef.current?.focus();
    }
  }, [editing]);

  const onSubmit = (data: Fields) => {
    if (!editing) {
      console.log({
        ...data,
        image: imageFile,
      });
    }
  };

  return (
    <Sign.Form onSubmit={handleSubmit(onSubmit)}>
      <Sign.Field>
        <Sign.Label htmlFor="image-input">Imagem de perfil</Sign.Label>
        <ImageInput
          disabled={!editing}
          id="image-input"
          value={user.imageUrl || defaultProfile}
          _ref={firstInputRef}
          onChange={(newImageFile) => setImageFile(newImageFile)}
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
            placeholder={user.about ?? 'Esse usuário ainda não definiu um "about"'}
          />
          <Sign.ErrorMessage>
            {errors.about?.message}
          </Sign.ErrorMessage>
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.Button
        onClick={editing ? () => setEditing(false) : () => setEditing(true)}
        className="w-fit py-2"
        type="submit"
      >
        {editing ? 'Salvar' : 'Editar'}
      </Sign.Button>
    </Sign.Form>
  );
}
