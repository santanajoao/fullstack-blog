import { Account } from "@prisma/client";

export const getAccountPublicFields = ({ username, email }: Account) => {
  return { username, email };
};
