import axios, { AxiosError, AxiosResponse } from 'axios';
import { ServiceResponse } from '@/types/ServiceResponse';
import { SignInFields } from '@/types/Sign/SignIn';
import { SignUpFields } from '@/types/Sign/SignUp';
import { SignResponse, User } from '@/types/Sign/SignResponse';

const signRoute = 'http://localhost:3001/accounts';

const treatRequest = async <T>(
  requestCallback: () => Promise<AxiosResponse<T>>,
): Promise<ServiceResponse<T>> => {
  try {
    const { data } = await requestCallback();

    return { success: true, data };
  } catch (error) {
    let message = 'Algo inesperado ocorreu na requisição';
    if (error instanceof AxiosError && error.response?.data) {
      message = error.response.data.message || message;
    }

    return { success: false, data: { message } };
  }
};

export const requestSignIn = async (
  signInFields: SignInFields,
): Promise<ServiceResponse<SignResponse>> => {
  const response = await treatRequest<SignResponse>(() => axios.post(`${signRoute}/signin`, signInFields));

  return response;
};

export const requestSignUp = async (
  signUpFields: SignUpFields,
): Promise<ServiceResponse<SignResponse>> => {
  const response = await treatRequest<SignResponse>(() => axios.post(`${signRoute}/signup`, signUpFields));

  return response;
};

export const requestUserData = async (
  token: string,
): Promise<ServiceResponse<User>> => {
  const response = treatRequest<User>(() => axios.get(`${signRoute}/me`, {
    headers: {
      Authorization: token,
    },
  }));

  return response;
};
