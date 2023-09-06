'use client';

import React, {
  useContext,
  useEffect, useRef, useState,
} from 'react';
import Sign from '@/components/Sign';
import defaultProfile from '@/assets/profile.svg';
import { aboutMaxLength, profilePersonalSchema } from '@/lib/schemas/account.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getCookie } from '@/lib/cookies';
import { updatePersonalInfos } from '@/services/account';
import { AuthContext } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';
import Textarea from './Textarea';
import ImageInput from './ImageInput';

type Fields = {
  imageUrl: string;
  username: string;
  about: string;
};

export default function PersonalInfosForm() {
  const { user, refreshUserData } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [generalError, setGeneralError] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
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

  const onSubmit = async (data: Fields) => {
    if (editing) return;

    const token = getCookie('blog.session.token') as string;
    const response = await updatePersonalInfos(data, token);

    if (response.success) {
      refreshUserData();
      setEditing(false);
      setGeneralError(null);
      toast.success('Informações atualizadas!');
    } else {
      setGeneralError(response.message);
    }
  };

  const cancelEditing = () => {
    setEditing(false);
    clearErrors();
    setGeneralError(null);
    reset();
  };

  return (
    <Sign.Form onSubmit={handleSubmit(onSubmit)}>
      <Sign.Field>
        <Sign.Label htmlFor="image-input">Imagem de perfil</Sign.Label>
        <ImageInput
          disabled={!editing}
          id="image-input"
          value={user?.imageUrl || defaultProfile}
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
            placeholder={user?.about ?? 'Esse usuário ainda não definiu um "about"'}
          />
          <Sign.ErrorMessage>
            {errors.about?.message}
          </Sign.ErrorMessage>
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.ErrorMessage>{generalError}</Sign.ErrorMessage>
      <div className="space-x-2">
        <Sign.Button
          onClick={editing ? () => setEditing(false) : () => setEditing(true)}
          className="py-2"
          type="submit"
        >
          {editing ? 'Salvar' : 'Editar'}
        </Sign.Button>

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
