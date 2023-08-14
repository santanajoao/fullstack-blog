import React from 'react';
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
  const register = (() => {}) as any as UseFormRegister<any>;

  return (
    <Sign.Form>
      <Sign.Field>
        <Sign.Label htmlFor="image-input">Imagem de perfil</Sign.Label>
        <ImageInput
          name="imageUrl"
          id="image-input"
          value={user.imageUrl || defaultProfile}
          register={register}
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
          />
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.Button type="submit" className="w-fit py-2">Editar</Sign.Button>
    </Sign.Form>
  );
}
