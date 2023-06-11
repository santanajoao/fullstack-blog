import prisma from "../src/lib/prisma";

const topics = [
  { name: 'Moda', imageUrl: '/moda.jpg' },
  { name: 'Inteligência Artificial', imageUrl: '/inteligencia-artificial.jpg' },
  { name: 'Saúde', imageUrl: '/saude.jpg' },
  { name: 'Carreira', imageUrl: '/carreira.jpg' },
  { name: 'Progamação', imageUrl: '/progamacao.jpg' },
  { name: 'Tecnologia', imageUrl: '/tecnologia.jpg' },
  { name: 'Esporte', imageUrl: '/esporte.jpg' },
  { name: 'Hobbies', imageUrl: '/hobbie.jpg' },
  { name: 'Música', imageUrl: '/musica.jpg' },
  { name: 'Jogos', imageUrl: '/jogos.jpg' },
];

const authors = [
  { id: 'dacf1a36-05e6-41ba-b6fe-3a24f0d2265b', name: 'João Pedro' },
  { id: '9364d263-db1d-4dd7-a772-a9b1bc4b8618', name: 'Anderson Souza' },
  { id: '47e73acf-79fe-4ffb-8371-e6b6bd47f097', name: 'Arnaldo Teves' },
  { id: 'a071f859-ffea-4978-a81c-9dff6b32c9c1', name: 'Carla Lorena' },
  { id: '0b7c793c-efa9-4b5c-b6eb-357bba21054b', name: 'Marcos Vinícis' }
]

const posts = [
  { imageUrl: '/inteligencia-artificial.jpg', authorId: authors[0].id, createdAt: new Date('2023-06-08'), title: 'A inteligência artificial vai te substituir?', description: 'Entenda o verdadeiro impacto do avanço das inteligências artificiais no seu trabalho e...' },
  { imageUrl: '/esporte.jpg', authorId: authors[1].id, createdAt: new Date('2023-06-08'), title: 'Quantas series fazer para hipertrofia?', description: 'Sempre ficou em dúvida em quantas seríes deve fazer? Sempre ouviu que cada caso é...' },
  { imageUrl: '/progamacao.jpg', authorId: authors[2].id, createdAt: new Date('2023-06-07'), title: 'Como eu aprendi javascript', description: 'Você sempre sonhou em ser programador, mas não sabe por onde começar? Nesse post...' },
  { imageUrl: '/musica.jpg', authorId: authors[3].id, createdAt: new Date('2023-05-12'), title: 'Músicas para você que quer explorar o mundo...', description: 'Gosta de rock e cansou de ouvir só as mesmas músicas? Aqui mostrare para você desde a...' },
  { imageUrl: '/moda.jpg', authorId: authors[4].id, createdAt: new Date('2023-02-23'), title: 'Combinações simples, mas estilosas para...', description: 'Se você é lowprofile provavelmente já teve dificuldade em variar suas...' },
];

const main = async () => {
  await prisma.topic.createMany({
    data: topics,
  });
  
  await prisma.post.createMany({
    data: posts,
  })
}

main();
