import { Account, AccountCredentials } from "@/types/Account";
import TServiceResponse from "@/types/ServiceResponse";
import { treatAxiosResponse } from "./errorHandling";
import axios from "axios";

export const updateCredentials = async (
  credentials: AccountCredentials,
  token: string,
): Promise<TServiceResponse<Account>> => {
  const { email, password, newPassword } = credentials; 

  const response = await treatAxiosResponse(
    () => axios.patch('http://localhost:3001/accounts/me/credentials', {
      email, password, newPassword
    }, { headers: { 'Authorization': token } })
  );
  
  return response;
};