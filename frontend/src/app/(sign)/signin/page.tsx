import React from 'react';
import SignInForm from '@/components/Sign/SignInForm';
import SignForm from '@/components/Sign';

export default function SignIn() {
  return (
    <>
      <SignForm.Title>Entre em sua conta</SignForm.Title>

      <SignInForm />

      <SignForm.Link href="/signup">
        Não tem uma conta? Crie uma agora!
      </SignForm.Link>
    </>
  );
}
