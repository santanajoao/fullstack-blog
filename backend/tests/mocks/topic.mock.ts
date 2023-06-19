import { Topic } from "@prisma/client";

const topic: Topic = {
  id: 'UUID',
  imageUrl: 'https://image-link.com',
  name: 'Topic',
};

const topicList: Topic[] = [topic];

export default {
  topic,
  topicList,
};
