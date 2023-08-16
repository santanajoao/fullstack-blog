'use client';

import React, { useState } from 'react';
import Sign from '@/components/Sign';
import { useForm } from 'react-hook-form';
import { Account } from '@/types/Account';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileCredentialsSchema } from '@/lib/schemas/account.schema';

interface Props {
  user: Account;
}

type Fields = {
  email: string;
  currentPassword: string;
  newPassword: string;
};

export default function CredentialsForm({ user }: Props) {
  const [editing, setEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>({
    defaultValues: {
      email: user.email,
      currentPassword: '',
      newPassword: '',
    },
    resolver: zodResolver(profileCredentialsSchema),
  });

  const onSubmit = (data: Fields) => {
    console.log(data);
  };

  return (
    <Sign.Form onSubmit={handleSubmit(onSubmit)}>
      <Sign.FieldsWrapper>
        <Sign.Field>
          <Sign.Label htmlFor="email-input">Email</Sign.Label>
          <Sign.Input
            autoFocus
            id="email-input"
            name="email"
            type="email"
            register={register}
            disabled={!editing}
          />
          <Sign.ErrorMessage>{errors.email?.message}</Sign.ErrorMessage>
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="current-password-input">Senha atual</Sign.Label>

          <Sign.HiddenPasswordInput
            name="currentPassword"
            id="current-password-input"
            register={register}
            disabled={!editing}
          />

          <Sign.ErrorMessage>{errors.currentPassword?.message}</Sign.ErrorMessage>
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="new-password-input">Nova senha</Sign.Label>

          <Sign.HiddenPasswordInput
            name="newPassword"
            id="new-password-input"
            register={register}
            disabled={!editing}
          />

          <Sign.ErrorMessage>{errors.newPassword?.message}</Sign.ErrorMessage>
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.Button
        type="submit"
        className="w-fit py-2"
        onClick={editing ? () => () => setEditing(false) : () => setEditing(true)}
      >
        {editing ? 'Salvar' : 'Editar'}
      </Sign.Button>
    </Sign.Form>
  );
}
