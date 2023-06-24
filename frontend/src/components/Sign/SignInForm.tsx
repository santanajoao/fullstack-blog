'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignInFields } from '@/types/Sign/SignIn'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '@/lib/schemas/sign.schema'
import { requestSignIn } from '@/services/sign'
import SignFormWrapper from './SignFormWrapper'
import SignInputsWrapper from './SignInputsWrapper'
import SignField from './SignField'
import HiddenInputField from './HiddenInputField'
import ErrorMessage from './ErrorMessage'
import SignButton from './SignButton'

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
  <SignFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SignInputsWrapper>
        <SignField
          label="Email"
          id="email"
          type="email"
          error={errors.email?.message}
          inputProps={register('email')}
        />

        <HiddenInputField
          label="Senha"
          id="password"
          error={errors.password?.message}
          inputProps={register('password')}
        />
      </SignInputsWrapper>

      <ErrorMessage>{apiError}</ErrorMessage>
      
      <SignButton>Entrar</SignButton>
    </SignFormWrapper>
  );
}
