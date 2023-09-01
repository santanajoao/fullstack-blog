export type Topic = {
  name: string,
  imageUrl: string,
  id: string,
};

export type TopicWithoutImage = Omit<Topic, 'imageUrl'>;
