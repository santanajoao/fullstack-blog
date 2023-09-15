import { AccountPublicFields, AccountWithImage } from "../types/account";
import { buildImageUrl } from "./image";

export const getAccountPublicFields = (
  { id, username, email, about, image }: AccountWithImage
): AccountPublicFields => {
  let imageUrl = null;
  if (image) {
    imageUrl = buildImageUrl(image.type, image.buffer);
  }

  return { id, username, email, imageUrl, about };
};
