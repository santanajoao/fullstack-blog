'use client';

import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { requestSignIn, requestSignUp, requestUserData } from '@/services/sign';
import { ChildrenProps } from '@/types/ChildrenProps';
import { ServiceResponse } from '@/types/ServiceResponse';
import { SignInFields } from '@/types/Sign/SignIn';
import { SignResponse, User } from '@/types/Sign/SignResponse';
import { SignUpFields } from '@/types/Sign/SignUp';
import { usePathname, useRouter } from 'next/navigation';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

interface ContextValues {
  error: string | null;
  user: User | null;
  isLoading: boolean;
  signIn(fields: SignInFields): Promise<void>;
  signUp(fields: SignUpFields): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext({} as ContextValues);

export function AuthProvider({ children }: ChildrenProps) {
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (['/signup', '/signin'].includes(pathname) && user) {
      router.push('/');
    }
  }, [pathname, router, user]);

  const handleSignData = ({ success, data }: ServiceResponse<SignResponse>) => {
    if (success) {
      setCookie(null, 'blog.session.token', data.token, {
        maxAge: 60 * 60 * 24 * 2, // 2 days
      });
      setUser(data.account);
      setError(null);

      router.push('/');
    } else {
      setError(data.message);
    }
  };

  const signIn = async ({ email, password }: SignInFields) => {
    setIsLoading(true);
    const signResponse = await requestSignIn({ email, password });

    handleSignData(signResponse);
    setIsLoading(false);
  };

  const signUp = async ({ email, password, username }: SignUpFields) => {
    setIsLoading(true);
    const signResponse = await requestSignUp({ email, password, username });

    handleSignData(signResponse);
    setIsLoading(false);
  };

  const signOut = () => {
    destroyCookie(null, 'blog.session.token');
    setUser(null);
    setIsLoading(false);
  };

  const refreshUserData = async () => {
    const { 'blog.session.token': token } = parseCookies();
    if (token) {
      setIsLoading(true);
      const { success, data } = await requestUserData(token);
      if (success) {
        setUser(data);
      } else {
        signOut();
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    refreshUserData();
  }, [pathname]);

  const values = useMemo(() => ({
    error, user, isLoading, signIn, signUp, signOut,
  }), [error, user, isLoading]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}
