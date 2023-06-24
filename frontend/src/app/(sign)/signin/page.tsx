'use client';

import HiddenInputField from "@/components/Sign/HiddenInputField"
import SignButton from "@/components/Sign/SignButton";
import SignField from "@/components/Sign/SignField";
import SignFormWrapper from "@/components/Sign/SignFormWrapper";
import SignLink from "@/components/Sign/SignLink";
import SignTitle from "@/components/Sign/SignTitle";
import { requestSignIn } from "@/services/sign";
import { signInSchema } from '@/lib/schemas/sign.schema';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import ErrorMessage from "@/components/Sign/ErrorMessage";
import SignInputsWrapper from "@/components/Sign/SignInputsWrapper";
import { SignInFields } from "@/types/Sign/SignIn";

export default function SignIn() {
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
      setApiError('')
    } else {
      setApiError(data.message)
    }
  };

  return (
    <>
      <SignTitle>Entre em sua conta</SignTitle>
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

        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
        
        <SignButton>Entrar</SignButton>
      </SignFormWrapper>

      <SignLink href="/signup">
        Não tem uma conta? Crie uma agora!
      </SignLink>
    </>
  );
}
