import express from 'express';
import helmet from 'helmet';
import routers from './routers';
import cors from 'cors';

const app = express();
app.use(helmet());
app.use(cors());

app.use('/topics', routers.topicRoutes);
app.use('/posts', routers.postRoutes);

export default app;
