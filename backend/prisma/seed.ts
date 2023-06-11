import prisma from "../src/lib/prisma";

const topics = [
  { name: 'Moda', imageUrl: '/moda.jpg' },
  { name: 'Inteligência Artificial', imageUrl: '/inteligencia-artificial.jpg' },
  { name: 'Esporte', imageUrl: '/esporte.jpg' },
  { name: 'Progamação', imageUrl: '/progamacao.jpg' },
  { name: 'Música', imageUrl: '/musica.jpg' },
  { name: 'Saúde', imageUrl: '/saude.jpg' },
  { name: 'Carreira', imageUrl: '/carreira.jpg' },
  { name: 'Tecnologia', imageUrl: '/tecnologia.jpg' },
  { name: 'Hobbies', imageUrl: '/hobbie.jpg' },
  { name: 'Jogos', imageUrl: '/jogos.jpg' },
];

const authors = [
  { name: 'Carla Lorena' },
  { name: 'Marcos Vinícis' },
  { name: 'Anderson Souza' },
  { name: 'João Pedro' },
  { name: 'Arnaldo Teves' },
]

const posts = [
  { imageUrl: '/moda.jpg', createdAt: new Date('2023-02-23'), title: 'Combinações simples, mas estilosas para...', description: 'Se você é lowprofile provavelmente já teve dificuldade em variar suas...' },
  { imageUrl: '/inteligencia-artificial.jpg', createdAt: new Date('2023-06-08'), title: 'A inteligência artificial vai te substituir?', description: 'Entenda o verdadeiro impacto do avanço das inteligências artificiais no seu trabalho e...' },
  { imageUrl: '/esporte.jpg', createdAt: new Date('2023-06-08'), title: 'Quantas series fazer para hipertrofia?', description: 'Sempre ficou em dúvida em quantas seríes deve fazer? Sempre ouviu que cada caso é...' },
  { imageUrl: '/progamacao.jpg', createdAt: new Date('2023-06-07'), title: 'Como eu aprendi javascript', description: 'Você sempre sonhou em ser programador, mas não sabe por onde começar? Nesse post...' },
  { imageUrl: '/musica.jpg', createdAt: new Date('2023-05-12'), title: 'Músicas para você que quer explorar o mundo...', description: 'Gosta de rock e cansou de ouvir só as mesmas músicas? Aqui mostrare para você desde a...' },
];

const main = async () => {
  const topicIds = await Promise.all(
    topics.map(async (topic) => prisma.topic.create({ data: topic })),
  );

  const authorIds = await Promise.all(
    authors.map(async (author) => prisma.author.create({ data: author })),
  );

  const postIds = await Promise.all(
    posts.map(async (post, index) => 
      prisma.post.create({ data: { ...post, authorId: authorIds[index].id } })
    )
  );
  
  await Promise.all(
    postIds.map(async (post, index) => 
      prisma.topicPost.create({ data: { postId: post.id, topicId: topicIds[index].id } })
    )
  );
}

main();
