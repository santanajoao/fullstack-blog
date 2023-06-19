import { Router } from 'express';
import accountController from '../controllers/account.controller';
import checkForAccountFields from '../middlewares/checkForAccountFields';

const accountRouter = Router();

accountRouter.post('/', checkForAccountFields, accountController.handlePostAccount);

export default accountRouter;
