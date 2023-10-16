'use client';

import React, { useEffect } from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import Container from '@/components/Container';
import PersonalInfosForm from '@/components/Profile/PersonalInfosForm';
import CredentialsForm from '@/components/Profile/CredentialsForm';
import { useUser } from '@/contexts/AuthContext';

export default function ProfilePage() {
  const { isLoading, user, authorize } = useUser();

  useEffect(() => {
    authorize({ required: true, redirectTo: '/signup' });
  }, [isLoading, user]);

  if (isLoading || !user) return null;

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
