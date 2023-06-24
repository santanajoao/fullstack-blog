'use client';

import HiddenInputField from "@/components/Sign/HiddenInputField";
import SignButton from "@/components/Sign/SignButton";
import SignField from "@/components/Sign/SignField";
import SignFormWrapper from "@/components/Sign/SignFormWrapper";
import SignInputsWrapper from "@/components/Sign/SignInputsWrapper";
import SignLink from "@/components/Sign/SignLink";
import SignTitle from "@/components/Sign/SignTitle";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/lib/schemas/sign.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestSignUp } from "@/services/sign";
import { useState } from "react";
import ErrorMessage from "@/components/Sign/ErrorMessage";
import { SignUpFields } from "@/types/Sign/SignUp";

export default function SignUp() {
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
    <>
      <SignTitle>Crie sua conta</SignTitle>
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

        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
        
        <SignButton>Entrar</SignButton>
      </SignFormWrapper>
      
      <SignLink href="/signin">Já tem uma conta? Entre aqui!</SignLink>
    </>
  );
}
