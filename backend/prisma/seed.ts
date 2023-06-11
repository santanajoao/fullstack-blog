import prisma from "../src/lib/prisma";

const topics = [
  { name: 'Moda', imageUrl: 'https://img.freepik.com/fotos-gratis/retrato-da-moda-da-jovem-mulher-elegante_1328-2743.jpg' },
  { name: 'Inteligência Artificial', imageUrl: 'https://img.freepik.com/fotos-gratis/tecnologia-de-fundo-de-toque-humano-remake-moderno-de-a-criacao-de-adam_53876-129794.jpg' },
  { name: 'Esporte', imageUrl: 'https://img.freepik.com/fotos-gratis/ferramentas-esportivas_53876-138077.jpg' },
  { name: 'Progamação', imageUrl: 'https://img.freepik.com/fotos-gratis/vista-traseira-do-programador-trabalhando-a-noite-toda_1098-18697.jpg' },
  { name: 'Música', imageUrl: 'https://img.freepik.com/fotos-gratis/mao-segurando-o-conceito-de-saude-do-estetoscopio_53876-129536.jpg' },
  { name: 'Viagem', imageUrl: 'https://img.freepik.com/vetores-gratis/conjunto-de-adesivos-e-crachas-de-viagem_53876-100734.jpg' },
  { name: 'Saúde', imageUrl: 'https://img.freepik.com/fotos-gratis/mao-segurando-o-conceito-de-saude-do-estetoscopio_53876-129536.jpg' },
  { name: 'Carreira', imageUrl: 'https://img.freepik.com/fotos-gratis/mulher-de-negocios-posando-com-os-bracos-cruzados-na-cidade_23-2148767057.jpg' },
  { name: 'Tecnologia', imageUrl: 'https://img.freepik.com/fotos-gratis/close-up-do-ciberespaco-do-circuito-com-luzes-de-neon_90220-1200.jpg' },
  { name: 'Hobbie', imageUrl: 'https://img.freepik.com/fotos-gratis/jovem-loira-pintando-com-acrilico_23-2148854525.jpg' },
  { name: 'Jogos', imageUrl: 'https://img.freepik.com/psd-gratuitas/fundo-de-banner-em-branco-para-jogos_23-2150390425.jpg' },
  { name: 'Educação', imageUrl: 'https://img.freepik.com/fotos-gratis/livro-com-fundo-de-placa-verde_1150-3837.jpg' },
  { name: 'Cultura', imageUrl: 'https://img.freepik.com/fotos-gratis/colorido-pintado-superficie-geometrico-formas_23-2147625971.jpg' },
  { name: 'Beleza', imageUrl: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-mulher-bonita-com-escova-de-cabelo_23-2150331711.jpg' },
  { name: 'Finanças', imageUrl: 'https://img.freepik.com/fotos-gratis/close-up-em-objetos-de-educacao-e-economia_23-2149113525.jpg' },
];

const authors = [
  { name: 'Carla Lorena' },
  { name: 'Marcos Vinícis' },
  { name: 'Anderson Souza' },
  { name: 'João Pedro' },
  { name: 'Arnaldo Teves' },
  { name: 'Carlos Alberto' },
  { name: 'Marcos Castro' },
  { name: 'Anderson Silva' },
  { name: 'João Gilberto' },
  { name: 'Arnaldo Sacomani' },
  { name: 'Carla Fernanda' },
  { name: 'Marcos Paulo' },
  { name: 'Anderson Lima'     },
  { name: 'João Victor' },
  { name: 'Arnaldo Santos' },
];

const posts = [
  { imageUrl: 'https://img.freepik.com/fotos-gratis/tiro-do-estudio-da-mulher-negra-bonita-com-o-saco-de-compras-branco-que-esta-sobre-o-fundo-amarelo-olhar-na-moda-primavera-na-moda_273443-10.jpg', createdAt: new Date('2023-06-11'), title: 'Moda sustentável: como se vestir bem e ajudar o planeta', description: 'Você sabia que a indústria da moda é uma das mais poluentes do mundo? Neste post, vou te mostrar como você pode adotar um estilo de vida mais consciente e ecológico sem abrir mão do seu bom gosto.', likes: 12 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/conceito-de-nuvem-ai-com-braco-robotico_23-2149739748.jpg', createdAt: new Date('2023-06-10'), title: 'Inteligência artificial: o que é, como funciona e quais são as suas aplicações', description: 'A inteligência artificial é uma das áreas mais fascinantes e promissoras da ciência da computação. Neste post, vou te explicar o que é essa tecnologia, como ela funciona e quais são as suas principais aplicações na sociedade.', likes: 18 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/mulher-determinada-de-construcao-muscular-correndo-enquanto-se-exercita-na-natureza-copie-o-espaco_637285-4877.jpg', createdAt: new Date('2023-06-09'), title: 'Esporte e saúde: os benefícios da atividade física para o seu corpo e mente', description: 'Você sabe quais são os benefícios do esporte para a sua saúde? Neste post, vou te mostrar como a prática regular de atividade física pode melhorar o seu humor, prevenir doenças e aumentar a sua qualidade de vida.', likes: 10 },
  { imageUrl: 'https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg', createdAt: new Date('2023-06-08'), title: 'Programação para iniciantes: como aprender a codificar do zero', description: 'Você tem vontade de aprender a programar, mas não sabe por onde começar? Neste post, vou te dar algumas dicas de como escolher uma linguagem de programação, quais são os melhores recursos online e como desenvolver seus primeiros projetos.', likes: 15 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/fundo-musical-volumetrico-com-uma-clave-de-sol-e-ia-geradora-de-notas_169016-29576.jpg', createdAt: new Date('2023-06-08'), title: 'Músicas para você que quer explorar o mundo do rock', description: 'Gosta de rock e cansou de ouvir só as mesmas músicas? Aqui mostrarei para você desde rock leve ao mais pesado dos rocks.', likes: 15 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/femininos-turistas-na-mao-tem-um-mapa-de-viagem-feliz_1150-7411.jpg', createdAt: new Date('2023-06-07'), title: 'Viagem dos sonhos: como planejar uma aventura incrível pelo mundo', description: 'Você sonha em viajar pelo mundo, mas não sabe como se organizar? Neste post, vou te ensinar como escolher um destino, fazer um roteiro, economizar dinheiro e aproveitar ao máximo a sua experiência.', likes: 20 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/feliz-desportista-agua-potavel-no-parque_1098-19542.jpg', createdAt: new Date('2023-06-07'), title: 'Saúde mental: como cuidar do seu bem-estar emocional em tempos de pandemia', description: 'Você se sente ansioso, estressado ou deprimido com a situação atual do mundo? Neste post, vou te mostrar algumas estratégias simples e eficazes para cuidar da sua saúde mental e enfrentar os desafios do dia a dia.', likes: 14 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/sonhando-jovem-empresaria-africana_171337-726.jpg', createdAt: new Date('2023-06-06'), title: 'Carreira profissional: como se destacar no mercado de trabalho em 2023', description: 'Você quer crescer na sua carreira, mas não sabe como se preparar para as novas demandas do mercado de trabalho? Neste post, vou te dar algumas dicas de como desenvolver as habilidades mais valorizadas pelos empregadores em 2023.', likes: 16 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg', createdAt: new Date('2023-06-06'), title: 'Tecnologia e inovação: as principais tendências para o futuro próximo', description: 'Você é apaixonado por tecnologia e quer saber quais são as novidades que vão mudar o mundo nos próximos anos? Neste post, vou te apresentar as principais tendências em áreas como inteligência artificial, internet das coisas, realidade virtual e muito mais.', likes: 19 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/artista-feminina-pintura-em-estudio_1303-11428.jpg', createdAt: new Date('2023-06-05'), title: 'Hobbies e lazer: como encontrar um passatempo que te faça feliz', description: 'Você tem algum hobby que te traz alegria e satisfação? Neste post, vou te mostrar como você pode descobrir e explorar os seus interesses pessoais, além de te dar algumas sugestões de atividades divertidas e criativas.', likes: 13 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/vista-da-configuracao-e-do-controlador-de-teclado-para-jogos-de-neon-iluminado_23-2149529357.jpg', createdAt: new Date('2023-05-22'), title: 'Jogos e diversão: os melhores games para jogar em 2023', description: 'Você é um gamer e está sempre em busca de novos desafios e emoções? Neste post, vou te indicar os melhores jogos para jogar em 2023, seja no PC, no console ou no celular. Prepare-se para se surpreender com gráficos incríveis, histórias envolventes e jogabilidade viciante.', likes: 17 },
  { imageUrl: 'https://img.freepik.com/vetores-gratis/plano-de-fundo-padrao-de-educacao-em-estilo-doodle_53876-115365.jpg', createdAt: new Date('2023-05-23'), title: 'Educação e aprendizagem: como estudar de forma eficiente e divertida', description: 'Você quer aprender algo novo, mas não sabe como estudar de forma eficiente e divertida? Neste post, vou te ensinar algumas técnicas de estudo que vão te ajudar a memorizar melhor, entender melhor e se divertir mais.', likes: 11 },
  { imageUrl: 'https://img.freepik.com/vetores-gratis/conjunto-de-cultura-e-artes_1284-17358.jpg', createdAt: new Date('2023-05-24'), title: 'Cultura e arte: como apreciar as diferentes formas de expressão humana', description: 'Você gosta de cultura e arte, mas não sabe como apreciar as diferentes formas de expressão humana? Neste post, vou te mostrar como você pode ampliar o seu repertório cultural, conhecer novas manifestações artísticas e desenvolver o seu senso crítico e estético.', likes: 12 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-linda-mulher-negra-com-sombras-misteriosas_23-2149095698.jpg', createdAt: new Date('2023-05-25'), title: 'Beleza e autoestima: como se sentir mais bonita e confiante', description: 'Você quer se sentir mais bonita e confiante, mas não sabe como cuidar da sua beleza e autoestima? Neste post, vou te dar algumas dicas de como valorizar o seu estilo, cuidar da sua pele, cabelo e maquiagem, além de te mostrar como cultivar uma atitude positiva em relação a si mesma.', likes: 14 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/closeup-de-economista-usando-calculadora-ao-passar-por-contas-e-impostos-no-escritorio_637285-3156.jpg', createdAt: new Date('2023-05-26'), title: 'Finanças pessoais: como organizar o seu dinheiro e alcançar os seus objetivos', description: 'Você quer ter mais controle sobre o seu dinheiro e alcançar os seus objetivos financeiros, mas não sabe como organizar as suas finanças pessoais? Neste post, vou te ensinar como fazer um orçamento, economizar, investir e planejar o seu futuro financeiro.', likes: 16 },
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
