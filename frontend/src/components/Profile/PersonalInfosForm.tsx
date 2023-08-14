'use client';

import React, {
  FormEvent, useEffect, useRef, useState,
} from 'react';
import Sign from '@/components/Sign';
import defaultProfile from 'public/profile.svg';
import { aboutMaxLength } from '@/lib/schemas/account.schema';
import { UseFormRegister } from 'react-hook-form';
import { Account } from '@/types/Account';
import Textarea from './Textarea';
import ImageInput from './ImageInput';

interface Props {
  user: Account;
}

export default function PersonalInfosForm({ user }: Props) {
  const [editing, setEditing] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      firstInputRef.current?.focus();
    }
  }, [editing]);

  const register = (() => {}) as any as UseFormRegister<any>;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Sign.Form onSubmit={handleSubmit}>
      <Sign.Field>
        <Sign.Label htmlFor="image-input">Imagem de perfil</Sign.Label>
        <ImageInput
          disabled={!editing}
          name="imageUrl"
          id="image-input"
          value={user.imageUrl || defaultProfile}
          register={register}
          _ref={firstInputRef}
        />
      </Sign.Field>

      <Sign.FieldsWrapper className="w-full">
        <Sign.Field>
          <Sign.Label htmlFor="username-input">Usuário</Sign.Label>
          <Sign.Input
            value={user.username}
            type="text"
            id="username-input"
            name="username"
            register={register}
            disabled={!editing}
          />
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="about-input">Sobre</Sign.Label>
          <Textarea
            value={user.about ?? ''}
            id="about-input"
            maxLength={aboutMaxLength}
            name="about"
            register={register}
            disabled={!editing}
          />
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.Button
        type={editing ? 'submit' : 'button'}
        className="w-fit py-2"
        onClick={editing ? undefined : () => setEditing(true)}
      >
        {editing ? 'Salvar' : 'Editar'}
      </Sign.Button>
    </Sign.Form>
  );
}
