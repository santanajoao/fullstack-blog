import { Router } from 'express';
import accountController from '../controllers/account.controller';
import checkForSignUpFields from '../middlewares/checkForSignUpFields';
import checkForSignInFields from '../middlewares/checkForSignInFields';

const accountRouter = Router();

accountRouter.post('/signup', checkForSignUpFields, accountController.handlePostAccount);
accountRouter.post('/signin', checkForSignInFields, accountController.handlePostSignIn);

export default accountRouter;
