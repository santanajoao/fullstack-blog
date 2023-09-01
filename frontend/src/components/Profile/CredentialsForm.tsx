'use client';

import React, { useContext, useState } from 'react';
import Sign from '@/components/Sign';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileCredentialsSchema } from '@/lib/schemas/account.schema';
import { updateCredentials } from '@/services/account';
import { getCookie } from '@/lib/cookies';
import { AuthContext } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';

type Fields = {
  email: string;
  password: string;
  newPassword: string;
};

export default function CredentialsForm() {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [generalError, setGeneralError] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<Fields>({
    defaultValues: {
      email: user?.email,
      password: '',
      newPassword: '',
    },
    resolver: zodResolver(profileCredentialsSchema),
  });

  const onSubmit = async (data: Fields) => {
    const token = getCookie('blog.session.token') as string;
    const response = await updateCredentials(data, token);

    if (response.success) {
      setEditing(false);
      setGeneralError(null);
      reset({ password: '', newPassword: '' });
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
            name="password"
            id="current-password-input"
            register={register}
            disabled={!editing}
          />

          <Sign.ErrorMessage>{errors.password?.message}</Sign.ErrorMessage>
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

      <Sign.ErrorMessage>{generalError}</Sign.ErrorMessage>
      <div className="space-x-2">
        <Sign.Button
          type="submit"
          className="py-2"
          onClick={editing ? undefined : () => setEditing(true)}
        >
          {editing ? 'Salvar' : 'Editar'}
        </Sign.Button>

        {editing && (
          <Sign.Button
            type="button"
            className="py-2 bg-zinc-300"
            onClick={cancelEditing}
          >
            Cancelar
          </Sign.Button>
        )}
      </div>
    </Sign.Form>
  );
}
