'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { signUpSchema } from '@/lib/schemas/sign.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFields } from '@/types/Sign/SignUp';
import { requestSignUp } from '@/services/sign';
import SignFormWrapper from './SignFormWrapper';
import SignInputsWrapper from './SignInputsWrapper';
import SignField from './SignField';
import HiddenInputField from './HiddenInputField';
import ErrorMessage from './ErrorMessage';
import SignButton from './SignButton';

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
    <SignFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SignInputsWrapper>
        <SignField
          id="name"
          label="Nome"
          type="text"
          inputProps={register('name')}
          error={errors.name?.message}
        />

        <SignField
          id="email"
          label="Email"
          type="email"
          inputProps={register('email')}
          error={errors.email?.message}
        />

        <HiddenInputField
          label="Senha"
          id="password"
          inputProps={register('password')}
          error={errors.password?.message}
        />
      </SignInputsWrapper>

      <ErrorMessage>{apiError}</ErrorMessage>
      
      <SignButton>Entrar</SignButton>
    </SignFormWrapper>
  );
}
