'use client';

import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { signUpSchema } from '@/lib/schemas/sign.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFields } from '@/types/Sign/SignUp';
import Sign from '.';
import { AuthContext } from '@/contexts/AuthContext';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema),
  });

  const { error, signUp } = useContext(AuthContext);

  const onSubmit = async ({ username, email, password }: SignUpFields) => {
    signUp({ username, email, password });
  };

  return (
    <Sign.Form onSubmit={handleSubmit(onSubmit)}>
      <Sign.FieldsWrapper>
        <Sign.Field>
          <Sign.Label htmlFor="username">Nome</Sign.Label>
          <Sign.Input id="username" name="username" type="text" register={register} />
          <Sign.ErrorMessage>{errors.username?.message}</Sign.ErrorMessage>
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="email">Email</Sign.Label>
          <Sign.Input id="email" name="email" type="email" register={register} />
          <Sign.ErrorMessage>{errors.email?.message}</Sign.ErrorMessage>
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="password">Senha</Sign.Label>
          <Sign.HiddenPasswordInput id="password" name="password" register={register} />
          <Sign.ErrorMessage>{errors.password?.message}</Sign.ErrorMessage>
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.ErrorMessage>{error}</Sign.ErrorMessage>
      
      <Sign.Button type="submit">Entrar</Sign.Button>
    </Sign.Form>
  );
}
