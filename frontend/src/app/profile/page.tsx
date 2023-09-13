'use client';

import { AuthContext } from '@/contexts/AuthContext';
import React, { useContext, useEffect } from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import Container from '@/components/Container';
import PersonalInfosForm from '@/components/Profile/PersonalInfosForm';
import CredentialsForm from '@/components/Profile/CredentialsForm';

export default function ProfilePage() {
  const { isLoading, redirect } = useContext(AuthContext);

  useEffect(() => {
    redirect({ requireLogin: true, to: '/signin', getBack: true });
  }, [redirect]);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      <HomeHeader />
      <main>
        <Container.Article className="m-auto max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5">
            Seu Perfil
          </h1>

          <Container.Section>
            <Container.Title>
              Informações pessoais
            </Container.Title>

            <PersonalInfosForm />
          </Container.Section>

          <Container.Section>
            <Container.Title>
              Credenciais
            </Container.Title>

            <CredentialsForm />
          </Container.Section>
        </Container.Article>
      </main>
    </>
  );
}
