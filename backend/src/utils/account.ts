import { AccountPublicFields, AccountWithImage } from "../types/account";

export const getAccountPublicFields = (
  { id, username, email, about, image }: AccountWithImage
): AccountPublicFields => {
  let imageUrl = null;
  if (image) {
    imageUrl = `data:${image.type};base64,${image.buffer.toString('base64')}`;
  }

  return { id, username, email, imageUrl, about };
};
