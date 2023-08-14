'use client';

import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import defaultProfile from 'public/profile.svg';
import Container from '@/components/Container';
import PersonalInfosForm from '@/components/Profile/PersonalInfosForm';
import CredentialsForm from '@/components/Profile/CredentialsForm';

export default function ProfilePage() {
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();

  if (isLoading) return <h1>Loading</h1>;
  if (!user) return router.push('/signin');

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

            <PersonalInfosForm user={user} />
          </Container.Section>

          <Container.Section>
            <Container.Title>
              Credenciais
            </Container.Title>

            <CredentialsForm user={user} />
          </Container.Section>
        </Container.Article>
      </main>
    </>
  );
}
