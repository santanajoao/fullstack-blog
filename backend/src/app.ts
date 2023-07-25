import express from 'express';
import helmet from 'helmet';
import routers from './routers';
import cors from 'cors';

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

export default app;
