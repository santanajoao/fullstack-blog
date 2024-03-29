import axios from 'axios';
import ServiceResponse from '@/types/ServiceResponse';
import { SignInFields } from '@/types/Sign/SignIn';
import { SignUpFields } from '@/types/Sign/SignUp';
import { SignResponse } from '@/types/Sign/SignResponse';
import { Account } from '@/types/Account';
import { treatAxiosResponse } from './errorHandling';
import { clientApiUrl } from './constants';

const signRoute = `${clientApiUrl}/accounts`;

export const requestSignIn = async (
  signInFields: SignInFields,
): Promise<ServiceResponse<SignResponse>> => {
  const response = await treatAxiosResponse<SignResponse>(
    () => axios.post(`${signRoute}/signin`, signInFields),
  );

  return response;
};

export const requestSignUp = async (
  signUpFields: SignUpFields,
): Promise<ServiceResponse<SignResponse>> => {
  const response = await treatAxiosResponse<SignResponse>(
    () => axios.post(`${signRoute}/signup`, signUpFields),
  );

  return response;
};

export const requestUserData = async (
  token: string,
): Promise<ServiceResponse<Account>> => {
  const response = await treatAxiosResponse<Account>(
    () => axios.get(`${signRoute}/me`, { headers: { Authorization: token } }),
  );

  return response;
};
