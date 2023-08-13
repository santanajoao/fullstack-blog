import React from 'react'
import Sign from '@/components/Sign';
import ImageInput from './ImageInput';
import defaultProfile from 'public/profile.svg';
import TextArea from './TextArea';
import { aboutMaxLength } from '@/lib/schemas/account.schema';
import { UseFormRegister } from 'react-hook-form';

export default function PersonalInfosForm() {
  const user = { imageUrl: '' };
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
            type="text"
            id="username-input"
            name="username"
            register={register}
          />
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="about-input">Sobre</Sign.Label>
          <TextArea
            value=""
            id="about-input"
            maxLength={aboutMaxLength}
            name="about"
            register={register}
          />
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.Button type="submit" className="w-fit py-2">Editar</Sign.Button>
    </Sign.Form>
  )
}
