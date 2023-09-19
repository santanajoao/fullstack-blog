'use client';

import { destroyCookie, getCookie, setCookie } from '@/lib/cookies';
import { requestSignIn, requestSignUp, requestUserData } from '@/services/sign';
import { SignResponse, User } from '@/types/Sign/SignResponse';
import { useRouter } from 'next/navigation';
import React, {
  useEffect, useState, createContext, useMemo, useContext,
} from 'react';
import ServiceResponse from '@/types/ServiceResponse';
import { SignUpFields } from '@/types/Sign/SignUp';
import { SignInFields } from '@/types/Sign/SignIn';
import { ChildrenProps } from '@/types/ChildrenProps';
import { AccountPersonalInfos, AccountCredentials } from '@/types/Account';
import {
  updatePersonalInfos,
  updateCredentials as updateCredentialsService,
} from '@/services/account';

type GetBackProps = {
  required: boolean;
  getBack?: true;
  redirectTo?: undefined;
};

type RedirectToProps = {
  required: boolean;
  redirectTo?: string;
  getBack?: undefined;
};

type AuthorizeProps = GetBackProps | RedirectToProps;

interface ContextValues {
  error: string | null;
  user: User | null;
  isLoading: boolean;
  signIn(fields: SignInFields): Promise<void>;
  signUp(fields: SignUpFields): Promise<void>;
  signOut(): void;
  authorize(redirectParams: AuthorizeProps): void;
  clearError(): void;
  updateProfile(fields: AccountPersonalInfos): Promise<boolean>;
  updateCredentials(fields: AccountCredentials): Promise<boolean>;
}

export const AuthContext = createContext({} as ContextValues);

const sessionTokenName = 'blog.session.token';

export function AuthProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const fetchUser = async () => {
    const token = getCookie(sessionTokenName);
    if (token) {
      const { success, data, message } = await requestUserData(token);

      if (success) {
        setUser(data);
      } else {
        setError(message);
        destroyCookie(sessionTokenName);
      }
    }

    setIsLoading(false);
  };

  const authorize = ({ required, redirectTo, getBack }: AuthorizeProps) => {
    if (isLoading) return;

    if ((required && user) || (!required && !user)) return;

    if (redirectTo) {
      router.push(redirectTo);
    } else if (getBack) {
      router.back();
    }
  };

  const handleSignData = ({ success, data, message }: ServiceResponse<SignResponse>) => {
    if (success) {
      setCookie(sessionTokenName, data.token, 60 * 60 * 24 * 2); // 2 days
      setUser(data.account);
    }
    setError(message);
  };

  const signUp = async ({ email, password, username }: SignUpFields) => {
    setIsLoading(true);
    const signResponse = await requestSignUp({ email, password, username });

    handleSignData(signResponse);
    setIsLoading(false);
  };

  const signIn = async ({ email, password }: SignInFields) => {
    setIsLoading(true);
    const signResponse = await requestSignIn({ email, password });

    handleSignData(signResponse);
    setIsLoading(false);
  };

  const signOut = () => {
    setUser(null);
    destroyCookie(sessionTokenName);
  };

  const updateProfile = async (
    { username, about, image }: AccountPersonalInfos,
  ): Promise<boolean> => {
    const formData = new FormData();
    formData.append('username', username);

    if (image) formData.append('image', image);
    if (about) formData.append('about', about);

    const token = getCookie(sessionTokenName) as string;
    const response = await updatePersonalInfos(formData, token);
    if (response.success) {
      setUser(response.data);
    }
    setError(response.message);

    return response.success;
  };

  const updateCredentials = async (
    data: AccountCredentials,
  ): Promise<boolean> => {
    const token = getCookie(sessionTokenName) as string;
    const response = await updateCredentialsService(data, token);

    if (response.success) {
      setUser(response.data);
    }
    setError(response.message);

    return response.success;
  };

  const clearError = () => { setError(null); };

  useEffect(() => {
    fetchUser();
  }, []);

  const values = useMemo(() => ({
    user,
    isLoading,
    error,
    authorize,
    signUp,
    signIn,
    signOut,
    updateProfile,
    updateCredentials,
    clearError,
  }), [user, isLoading, error]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}

export const useUser = () => useContext(AuthContext);
