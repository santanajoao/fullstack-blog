import prisma from '../../src/lib/prisma';
import topics from './data/topics'
import accounts from './data/accounts';
import posts from './data/posts';

const seed = async () => {
  await prisma.topic.createMany({ data: topics });
  
  await prisma.account.createMany({ data: accounts });

  await Promise.all(posts.map((post) => prisma.post.create({ data: post })));
};

seed()
