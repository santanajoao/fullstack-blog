import { SyncServiceResponse } from "../../types/ServiceResponse";
import { signInSchema } from "./schemas/account.schema";
import validateFields from "./validateFields";

const validateSignInFields = (email: string, password: string): SyncServiceResponse<null> => {
  return validateFields(signInSchema, { email, password });
};

export default validateSignInFields;
