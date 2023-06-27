import { Account } from "@prisma/client";
import { AccountPublicFields } from "../types/account";

export const getAccountPublicFields = (
  { username, email, imageUrl }: Account
): AccountPublicFields => {
  return { username, email, imageUrl };
};
