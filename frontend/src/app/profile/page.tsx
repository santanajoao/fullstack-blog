'use client';

import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import EditInput from '@/components/Profile/EditInput';
import defaultProfile from 'public/profile.svg';
import ImageInput from '@/components/Profile/ImageInput';
import SectionListing from '@/components/SectionListing';

export default function ProfilePage() {
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (!user) {
    router.push('/signin');
    return null;
  }

  return (
    <>
      <HomeHeader />
      <main className="p-5">
        <SectionListing.Article>
          <section>
            <SectionListing.Title>Imagem de perfil</SectionListing.Title>
            <ImageInput value={user.imageUrl ?? defaultProfile} />
          </section>

          <section>
            <SectionListing.Title>Usuário de exibição</SectionListing.Title>
            <EditInput value={user.username} />
          </section>
        </SectionListing.Article>
      </main>
    </>
  );
}
