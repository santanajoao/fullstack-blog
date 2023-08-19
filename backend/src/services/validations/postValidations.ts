import { TPostCreation } from "../../types/post";
import { AsyncServiceResponse } from "../../types/serviceResponse";
import { validateAccountId } from "./likeValidations";
import { postSchema } from "./schemas/post.schema";
import validateSchemaFields from "./validateSchemaFields";

export const validatePost = async ({
  title, description, content, accountId,
}: TPostCreation): AsyncServiceResponse<null> => {
  const idValidation = await validateAccountId(accountId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const fieldsValidation = validateSchemaFields(postSchema, {
    title, description, content,
  });
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  return { status: 'SUCCESS', data: null };
}
