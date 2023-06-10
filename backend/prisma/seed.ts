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

const posts = [
  { imageUrl: '/inteligencia-artificial.jpg', author: 'João Pedro', createdAt: new Date('2023-06-08'), title: 'A inteligência artificial vai te substituir?', description: 'Entenda o verdadeiro impacto do avanço das inteligências artificiais no seu trabalho e...' },
  { imageUrl: '/esporte.jpg', author: 'Anderson Souza', createdAt: new Date('2023-06-08'), title: 'Quantas series fazer para hipertrofia?', description: 'Sempre ficou em dúvida em quantas seríes deve fazer? Sempre ouviu que cada caso é...' },
  { imageUrl: '/progamacao.jpg', author: 'Arnaldo Teves', createdAt: new Date('2023-06-07'), title: 'Como eu aprendi javascript', description: 'Você sempre sonhou em ser programador, mas não sabe por onde começar? Nesse post...' },
  { imageUrl: '/musica.jpg', author: 'Carla Lorena', createdAt: new Date('2023-05-12'), title: 'Músicas para você que quer explorar o mundo...', description: 'Gosta de rock e cansou de ouvir só as mesmas músicas? Aqui mostrare para você desde a...' },
  { imageUrl: '/moda.jpg', author: 'Marcos Vinicius', createdAt: new Date('2023-02-23'), title: 'Combinações simples, mas estilosas para...', description: 'Se você é lowprofile provavelmente já teve dificuldade em variar suas...' },
];
// alterar os urls e refatorar o service de tópicos
const main = async () => {
  await prisma.topic.createMany({
    data: topics,
  });
  
  await prisma.post.createMany({
    data: posts,
  })
}

main();
