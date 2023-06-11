import express from 'express';
import routers from './routers';

const app = express();

app.use('/topics', routers.topicRoutes);
app.use('/posts', routers.postRoutes);

export default app;
