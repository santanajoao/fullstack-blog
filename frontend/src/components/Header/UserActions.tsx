'use client';

import React, { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import SignLinks from './SignLinks';
import UserCard from './UserCard';

export default function UserActions() {
  const { user } = useContext(AuthContext);

  if (!user) return <SignLinks />;

  return <UserCard username={user.username} imageUrl={user.imageUrl} />;
}
