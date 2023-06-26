'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignInFields } from '@/types/Sign/SignIn'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '@/lib/schemas/sign.schema'
import { requestSignIn } from '@/services/sign'
import ErrorMessage from './ErrorMessage'
import Sign from '.';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFields>({
    resolver: zodResolver(signInSchema),
  });

  const [apiError, setApiError] = useState('');

  const onSubmit = async (formData: SignInFields) => {
    const { success, data } = await requestSignIn(formData);
    if (success) {
      setApiError('');
    } else {
      setApiError(data.message);
    }
  };

  return (
  <Sign.Form onSubmit={handleSubmit(onSubmit)}>
      <Sign.FieldsWrapper>
        <Sign.Field>
          <Sign.Label htmlFor="email">Email</Sign.Label>

          <Sign.Input id="email" type="email" name="email" register={register} />

          <Sign.ErrorMessage>{errors.email?.message}</Sign.ErrorMessage>
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="password">Senha</Sign.Label>

          <Sign.HiddenPasswordInput id="password" name="password" register={register} />

          <Sign.ErrorMessage>{errors.password?.message}</Sign.ErrorMessage>
        </Sign.Field>
      </Sign.FieldsWrapper>

      <ErrorMessage>{apiError}</ErrorMessage>
      
      <Sign.Button type="submit">Entrar</Sign.Button>
    </Sign.Form>
  );
}
