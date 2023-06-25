'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { signUpSchema } from '@/lib/schemas/sign.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFields } from '@/types/Sign/SignUp';
import { requestSignUp } from '@/services/sign';
import Sign from '.';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema),
  });
  const [apiError, setApiError] = useState('');

  const onSubmit = async (formData: SignUpFields) => {
    const { success, data } = await requestSignUp(formData);
    if (success) {
      setApiError('')
      console.log(data);
    } else {
      setApiError(data.message)
    }
  };
  return (
    <Sign.Form onSubmit={handleSubmit(onSubmit)}>
      <Sign.FieldsWrapper>
        <Sign.Field>
          <Sign.Label htmlFor="name">Nome</Sign.Label>
          <Sign.Input id="name" type="text" />
          <Sign.ErrorMessage>{errors.name?.message}</Sign.ErrorMessage>
        </Sign.Field>
 
        <Sign.Field>
          <Sign.Label htmlFor="email">Email</Sign.Label>
          <Sign.Input id="email" type="email" />
          <Sign.ErrorMessage>{errors.email?.message}</Sign.ErrorMessage>
        </Sign.Field>

        <Sign.Field>
          <Sign.Label htmlFor="password">Senha</Sign.Label>
          <Sign.HiddenPasswordInput id="password" />
          <Sign.ErrorMessage>{errors.password?.message}</Sign.ErrorMessage>
        </Sign.Field>
      </Sign.FieldsWrapper>

      <Sign.ErrorMessage>{apiError}</Sign.ErrorMessage>
      
      <Sign.Button type="submit">Entrar</Sign.Button>
    </Sign.Form>
  );
}
