'use client';

import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import userPicture from '@/../public/user.webp';
import Image from 'next/image';

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
    <div>
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
      <Image src={user.imageUrl ?? userPicture} alt={`Imagem de perfil de ${user.username}`} />
    </div>
  );
}
