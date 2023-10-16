import { Comment } from '@prisma/client';

export type CommentCreation = Pick<Comment, 'accountId' | 'postId' | 'comment'>;
