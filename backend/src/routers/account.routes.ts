import { Router } from 'express';
import accountController from '../controllers/account.controller';
import checkForSignUpFields from '../middlewares/checkForSignUpFields';
import checkForSignInFields from '../middlewares/checkForSignInFields';
import validateToken from '../middlewares/validateToken';
import checkForFields from '../middlewares/checkForFields';

const accountRouter = Router();

accountRouter.post(
  '/signup', checkForSignInFields, accountController.handlePostAccount,
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
  checkForFields(['username', 'about']),
  validateToken,
  accountController.handlePatchPersonal,
);

accountRouter.get('/:id', accountController.handleGetAccountById);

export default accountRouter;
