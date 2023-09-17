import { Router } from 'express';
import * as accountController from '../controllers/account.controller';
import checkForSignUpFields from '../middlewares/checkForSignUpFields';
import checkForSignInFields from '../middlewares/checkForSignInFields';
import validateToken from '../middlewares/validateToken';
import checkForFields from '../middlewares/checkForFields';
import uploader from '../lib/multer';
import validateFileSize from '../middlewares/validateFileSize';

const accountRouter = Router();

accountRouter.post(
  '/signup', checkForSignUpFields, accountController.handlePostAccount,
);

accountRouter.post(
  '/signin', checkForSignInFields, accountController.handlePostSignIn,
);

accountRouter.get('/me', validateToken, accountController.handleGetAccountById);
accountRouter.patch(
  '/me/credentials',
  checkForFields(['email', 'password', 'newPassword']),
  validateToken,
  accountController.handlePatchCredentials,
);
accountRouter.patch(
  '/me/personal',
  uploader.single('image'),
  validateFileSize(2),
  checkForFields(['username']),
  validateToken,
  accountController.handlePatchPersonal,
);

accountRouter.get('/:id', accountController.handleGetAccountById);

export default accountRouter;
