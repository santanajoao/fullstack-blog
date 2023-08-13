'use client';

import { passwordChangeSchema } from '@/lib/schemas/sign.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import Sign from '@/components/Sign';

type PasswordChangeFields = {
  currentPassword: string;
  newPassword: string;
};

export default function PasswordChangeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordChangeFields>({
    resolver: zodResolver(passwordChangeSchema),
  });

  const onSubmit = (formData: PasswordChangeFields) => {
    console.log(formData);
  };

  return (
    <Sign.Form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
      <Sign.FieldsWrapper>
        <Sign.Field>
          <Sign.Label htmlFor="current-password-input">Senha atual</Sign.Label>

          <Sign.HiddenPasswordInput
            name="currentPassword"
            id="current-password-input"
            register={register}
          />

          <Sign.ErrorMessage>{errors.currentPassword?.message}</Sign.ErrorMessage>
        </Sign.Field>
        <Sign.Field>
          <Sign.Label htmlFor="new-password-input">Nova senha</Sign.Label>

          <Sign.HiddenPasswordInput
            name="newPassword"
            id="new-password-input"
            register={register}
          />

          <Sign.ErrorMessage>{errors.newPassword?.message}</Sign.ErrorMessage>
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.Button type="submit" className="w-fit py-2">Alterar</Sign.Button>
    </Sign.Form>
  );
}
