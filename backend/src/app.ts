import express from 'express';
import helmet from 'helmet';
import routers from './routers';

const app = express();
app.use(helmet())

app.use('/topics', routers.topicRoutes);
app.use('/posts', routers.postRoutes);

export default app;
