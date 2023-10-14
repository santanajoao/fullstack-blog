import { Account } from "./Account"

export type Comment = {
  id: string;
  comment: string;
  account: Pick<Account, 'id' | 'imageUrl' | 'username'>;
  upvotes: number;
}
