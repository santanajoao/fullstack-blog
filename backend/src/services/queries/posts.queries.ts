type OrderTypes = 'desc' | 'asc';
type OrderByObject = {} | Record<string, OrderTypes>

const postByTopicQueryCreator = (
  topicId: string, orderBy: OrderByObject = {},
) => {
  return ({
    include: {
      account: {
        select: {
          username: true,
        },
      },
    },
    where: {
      postTopics: {
        some: {
          topicId,
        },
      }
    },
    orderBy,
  });
}

export const getPostByTopicQuery = (topicId: string, orderProperty: string) => {
  const ORDER_PROPERTIES = new Map([['likes', 'likes'], ['creation', 'createdAt']]);

  if (ORDER_PROPERTIES.has(orderProperty)) {
    const property = ORDER_PROPERTIES.get(orderProperty) as string;
    return postByTopicQueryCreator(topicId, { [property]: 'desc' });
  }

  return postByTopicQueryCreator(topicId);
};
