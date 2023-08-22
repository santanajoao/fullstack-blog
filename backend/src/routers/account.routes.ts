import { Router } from 'express';
import accountController from '../controllers/account.controller';
import checkForSignUpFields from '../middlewares/checkForSignUpFields';
import checkForSignInFields from '../middlewares/checkForSignInFields';
import validateToken from '../middlewares/validateToken';

const accountRouter = Router();

accountRouter.post('/signup', checkForSignUpFields, accountController.handlePostAccount);
accountRouter.post('/signin', checkForSignInFields, accountController.handlePostSignIn);
accountRouter.get('/me', validateToken, accountController.handleGetAccountById);
accountRouter.patch('/me/credentials', validateToken, accountController.handlePatchCredentials);
accountRouter.get('/:id', accountController.handleGetAccountById);

export default accountRouter;
