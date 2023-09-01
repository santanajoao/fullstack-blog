import { Account, AccountCredentials, AccountPersonalInfos } from '@/types/Account';
import TServiceResponse from '@/types/ServiceResponse';
import axios from 'axios';
import { treatAxiosResponse } from './errorHandling';

export const updateCredentials = async (
  credentials: AccountCredentials,
  token: string,
): Promise<TServiceResponse<Account>> => {
  const { email, password, newPassword } = credentials;

  const response = await treatAxiosResponse(
    () => axios.patch('http://localhost:3001/accounts/me/credentials', {
      email, password, newPassword,
    }, { headers: { Authorization: token } }),
  );

  return response;
};

export const updatePersonalInfos = async (
  personalInfos: AccountPersonalInfos,
  token: string,
): Promise<TServiceResponse<Account>> => {
  const { username, about } = personalInfos;

  const response = await treatAxiosResponse(
    () => axios.patch('http://localhost:3001/accounts/me/personal', {
      username, about,
    }, { headers: { Authorization: token } }),
  );

  return response;
};
