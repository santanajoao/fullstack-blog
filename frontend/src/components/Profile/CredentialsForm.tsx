import React from 'react';
import Sign from '@/components/Sign';
import { UseFormRegister } from 'react-hook-form';

export default function CredentialsForm() {
  const register = (() => {}) as any as UseFormRegister<any>;

  return (
    <Sign.Form>
      <Sign.FieldsWrapper>
        <Sign.Field>
          <Sign.Label htmlFor="email-input">Email</Sign.Label>
          <Sign.Input
            id="email-input"
            name="email"
            type="email"
            register={register}
          />
        </Sign.Field>

        <Sign.FieldsWrapper>
          <Sign.Field>
            <Sign.Label htmlFor="current-password-input">Senha atual</Sign.Label>
            
            <Sign.HiddenPasswordInput
              name="currentPassword"
              id="current-password-input"
              register={register}
            />

            <Sign.ErrorMessage>{''}</Sign.ErrorMessage>
          </Sign.Field>

          <Sign.Field>
            <Sign.Label htmlFor="new-password-input">Nova senha</Sign.Label>

            <Sign.HiddenPasswordInput
              name="newPassword"
              id="new-password-input"
              register={register}
            />

            <Sign.ErrorMessage>{''}</Sign.ErrorMessage>
          </Sign.Field>
        </Sign.FieldsWrapper>
      </Sign.FieldsWrapper>

      <Sign.Button type="submit" className="w-fit py-2">Editar</Sign.Button>
    </Sign.Form>
  )
}
