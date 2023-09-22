import { Account, AccountCredentials } from '@/types/Account';
import TServiceResponse from '@/types/ServiceResponse';
import axios from 'axios';
import { clientApiUrl } from './constants';
import { treatAxiosResponse } from './errorHandling';

export const updateCredentials = async (
  credentials: AccountCredentials,
  token: string,
): Promise<TServiceResponse<Account>> => {
  const { email, password, newPassword } = credentials;

  const response = await treatAxiosResponse(
    () => axios.patch(`${clientApiUrl}/accounts/me/credentials`, {
      email, password, newPassword,
    }, { headers: { Authorization: token } }),
  );

  return response;
};

export const updatePersonalInfos = async (
  formData: FormData,
  token: string,
): Promise<TServiceResponse<Account>> => {
  const response = await treatAxiosResponse(
    () => axios.patch(`${clientApiUrl}/accounts/me/personal`, formData, {
      headers: { Authorization: token },
    }),
  );

  return response;
};
