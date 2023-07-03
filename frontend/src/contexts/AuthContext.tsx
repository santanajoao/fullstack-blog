'use client';

import { requestSignIn, requestSignUp, requestUserData } from "@/services/sign";
import { ChildrenProps } from "@/types/ChildrenProps";
import { ServiceResponse } from "@/types/ServiceResponse";
import { SignInFields } from "@/types/Sign/SignIn";
import { SignResponse, User } from "@/types/Sign/SignResponse";
import { SignUpFields } from "@/types/Sign/SignUp";
import { usePathname, useRouter } from "next/navigation";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { createContext, useEffect, useState } from "react";

interface ContextValues {
  error: string | null;
  user: User | null;
  signIn(fields: SignInFields): Promise<void>;
  signUp(fields: SignUpFields): Promise<void>;
  signOut(): void;
};

export const AuthContext = createContext({} as ContextValues);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    refreshUserData();
  }, []);

  useEffect(() => {
    if (['/signup', '/signin'].includes(pathname) && user) {
      router.push('/')
    }
  }, [pathname, router, user])

  const refreshUserData = async () => {
    const { 'blog.session.token': token } = parseCookies();
    if (token) {
      const { success, data } = await requestUserData(token);
      if (success) {
        setUser(data);
      }
    }
  };

  const handleSignData = ({ success, data }: ServiceResponse<SignResponse>) => {
    if (success) {
      setCookie(null, 'blog.session.token', data.token, {
        maxAge: 60 * 60 * 24 * 2,  // 2 days
      });
      setUser(data.account);
      setError(null)

      router.push('/');
    } else {
      setError(data.message);
    }
  }

  const signIn = async ({ email, password }: SignInFields) => {
    const signResponse = await requestSignIn({ email, password });
    
    handleSignData(signResponse);
  };

  const signUp = async ({ email, password, username }: SignUpFields) => {
    const signResponse = await requestSignUp({ email, password, username });
    
    handleSignData(signResponse);
  };

  const signOut = () => {
    destroyCookie(null, 'blog.session.token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ error, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}