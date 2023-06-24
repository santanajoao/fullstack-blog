import axios, { AxiosError } from "axios";
import { ServiceResponse } from "@/types/ServiceResponse";
import { Token } from "@/types/Token";
import { SignInFields } from "@/types/Sign/SignIn";
import { SignUpFields } from "@/types/Sign/SignUp";

const signRoute = 'http://localhost:3001/accounts';

const treatPostRequest = async <B, R>(
  url: string,
  body: B,
): Promise<ServiceResponse<R>> => {
  try {
    const { data } = await axios.post<R>(url, body);

    return { success: true, data };
  } catch (error) {
    let message = 'Algo inesperado ocorreu na requisição';
    if (error instanceof AxiosError && error.response?.data) {
      message = error.response.data.message || message;
    }

    return { success: false, data: { message } };
  }
}

export const requestSignIn = async (
  signInFields: SignInFields,
): Promise<ServiceResponse<Token>> => {
  const response = await treatPostRequest<SignInFields, Token>(
    `${signRoute}/signin`,
    signInFields,
  );

  return response;
};

export const requestSignUp = async (
  signUpFields: SignUpFields,
): Promise<ServiceResponse<Token>> => {
  const response = await treatPostRequest<SignUpFields, Token>(
    `${signRoute}/signup`,
    signUpFields,
  );
  return response;
}
