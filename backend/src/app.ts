import express from 'express';
import routers from './routers';

const app = express();

app.use('/topics', routers.topicRoutes);

export default app;
