import express from 'express';
import helmet from 'helmet';
import routers from './routers';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();
app.use(helmet());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

app.use('/topics', routers.topicRoutes);
app.use('/posts', routers.postRoutes);
app.use('/accounts', routers.accountRoutes);
app.use('/likes', routers.likeRoutes);
app.use('/comments', routers.commentRoutes);

app.get('/status', (_req: Request, res: Response) => {
  res.status(200).json('OK');
});

export default app;
