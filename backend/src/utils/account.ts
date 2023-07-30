import { Account } from "@prisma/client";
import { AccountPublicFields } from "../types/account";

export const getAccountPublicFields = (
  { id, username, email, imageUrl, about }: Account
): AccountPublicFields => {
  return { id, username, email, imageUrl, about };
};
