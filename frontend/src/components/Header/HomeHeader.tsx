import React from 'react';
import Link from 'next/link';
import HeaderWrapper from './HeaderWrapper';
import BlogLogo from '../BlogLogo';
import UserCard from './UserCard';

export default function HomeHeader() {
  return (
    <HeaderWrapper>
      <Link href="/">
        <BlogLogo size="small" />
      </Link>

      <UserCard />
    </HeaderWrapper>
  );
}
