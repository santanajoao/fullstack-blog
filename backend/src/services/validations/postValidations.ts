import prisma from "../../lib/prisma";
import { TPostCreation } from "../../types/post";
import { AsyncServiceResponse } from "../../types/serviceResponse";
import { validateAccountId } from "./accountValidations";
import { postSchema } from "./schemas/post.schema";
import validateSchemaFields from "./validateSchemaFields";

export const validatePost = async ({
  title, description, content, accountId, topics,
}: TPostCreation): AsyncServiceResponse<null> => {
  const idValidation = await validateAccountId(accountId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const fieldsValidation = validateSchemaFields(postSchema, {
    title, description, content, topics,
  });
  if (fieldsValidation.status !== 'SUCCESS') return fieldsValidation;

  return { status: 'SUCCESS', data: null };
}

export const validatePostId = async (postId: string): AsyncServiceResponse<null> => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post não encontrado' } };
  }

  return { status: 'SUCCESS', data: null };
};
