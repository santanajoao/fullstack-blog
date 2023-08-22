import { AsyncServiceResponse } from "../../types/serviceResponse";
import { validateAccountId } from "./likeValidations";
import { validatePassword } from "./signInValidations";

export const validatePasswordChange = async (
  id: string,
  password: string,
): AsyncServiceResponse<null> => {
  const accountValidation = await validateAccountId(id);
  if (accountValidation.status !== 'SUCCESS') return accountValidation;
  const account = accountValidation.data;

  const passwordValidation = await validatePassword(account.password, password);
  if (passwordValidation.status !== 'SUCCESS') return passwordValidation;
  
  return { status: 'SUCCESS', data: null };
};
