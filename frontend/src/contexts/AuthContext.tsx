'use client';

import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { requestSignIn, requestSignUp, requestUserData } from '@/services/sign';
import { ChildrenProps } from '@/types/ChildrenProps';
import ServiceResponse from '@/types/ServiceResponse';
import { SignInFields } from '@/types/Sign/SignIn';
import { SignResponse, User } from '@/types/Sign/SignResponse';
import { SignUpFields } from '@/types/Sign/SignUp';
import { usePathname, useRouter } from 'next/navigation';
import { destroyCookie, getCookie, setCookie } from '@/lib/cookies';

type RedirectParams = {
  requireLogin: boolean;
  to: string;
  getBack?: boolean;
};

interface ContextValues {
  error: string | null;
  user: User | null;
  isLoading: boolean;
  signIn(fields: SignInFields): Promise<void>;
  signUp(fields: SignUpFields): Promise<void>;
  signOut(): void;
  refreshUserData(): void;
  redirect(redirectParams: RedirectParams): boolean;
  clearError(): void;
}

export const AuthContext = createContext({} as ContextValues);

export function AuthProvider({ children }: ChildrenProps) {
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [redirectBack, setRedirectBack] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const clearError = () => { setError(null); };

  const handleSignData = ({ success, data, message }: ServiceResponse<SignResponse>) => {
    if (success) {
      setCookie('blog.session.token', data.token, 60 * 60 * 24 * 2); // 2 days
      setUser(data.account);
      clearError();

      router.push('/');
    } else {
      setError(message);
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
    destroyCookie('blog.session.token');
    setUser(null);
    setIsLoading(false);
  };

  const refreshUserData = async () => {
    const token = getCookie('blog.session.token');
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

  const redirect = ({ requireLogin, to, getBack = false }: RedirectParams) => {
    const requiredAndNotFound = requireLogin && !user;
    const notRequiredAndFound = !requireLogin && user;

    if (requiredAndNotFound || notRequiredAndFound) {
      if (redirectBack) {
        router.back();
      } else {
        router.push(to);
      }

      setRedirectBack(getBack);

      return true;
    }

    return false;
  };

  useEffect(() => {
    refreshUserData();
  }, [pathname]);

  const values = useMemo(() => ({
    error,
    user,
    isLoading,
    signIn,
    signUp,
    signOut,
    refreshUserData,
    redirect,
    clearError,
  }), [error, user, isLoading]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}
