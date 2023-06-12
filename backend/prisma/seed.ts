import prisma from '../src/lib/prisma';

const topics = [
  { name: 'Moda', imageUrl: 'https://img.freepik.com/fotos-gratis/retrato-da-moda-da-jovem-mulher-elegante_1328-2743.jpg' },
  { name: 'Inteligência Artificial', imageUrl: 'https://img.freepik.com/fotos-gratis/tecnologia-de-fundo-de-toque-humano-remake-moderno-de-a-criacao-de-adam_53876-129794.jpg' },
  { name: 'Esporte', imageUrl: 'https://img.freepik.com/fotos-gratis/ferramentas-esportivas_53876-138077.jpg' },
  { name: 'Progamação', imageUrl: 'https://img.freepik.com/fotos-gratis/vista-traseira-do-programador-trabalhando-a-noite-toda_1098-18697.jpg' },
  { name: 'Música', imageUrl: 'https://img.freepik.com/fotos-gratis/fundo-musical-volumetrico-com-uma-clave-de-sol-e-ia-geradora-de-notas_169016-29576.jpg' },
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
  { name: 'Culinária', imageUrl: 'https://img.freepik.com/fotos-gratis/ingredientes-para-cozinhar_1220-4544.jpg' },
  { name: 'Arte', imageUrl: 'https://img.freepik.com/fotos-gratis/pintura-abstrata-colorida_23-2147625971.jpg' },
  { name: 'Cinema', imageUrl: 'https://img.freepik.com/fotos-gratis/um-balde-de-pipoca-e-um-copo-de-pipoca-estao-sobre-a-mesa-de-um-cinema_1340-34294.jpg' },
  { name: 'Literatura', imageUrl: 'https://img.freepik.com/fotos-gratis/fila-de-livros-antigos-preenche-estantes-antigas-geradas-por-ia_188544-30269.jpg' },
  { name: 'Fotografia', imageUrl: 'https://img.freepik.com/fotos-gratis/camera-profissional-em-um-desfocado_169016-10249.jpg' },
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
  { name: 'Carla Maria' },
  { name: 'Marcos Roberto' },
  { name: 'Anderson Oliveira' },
  { name: 'João Carlos' },
  { name: 'Arnaldo Cezar' },
];

const posts = [
  { imageUrl: 'https://img.freepik.com/fotos-gratis/tiro-do-estudio-da-mulher-negra-bonita-com-o-saco-de-compras-branco-que-esta-sobre-o-fundo-amarelo-olhar-na-moda-primavera-na-moda_273443-10.jpg', createdAt: new Date('2023-06-12'), title: 'Moda sustentável: como se vestir bem e ajudar o planeta', description: 'Você sabia que a indústria da moda é uma das mais poluentes do mundo? Neste post, vou te mostrar como adotar um estilo mais consciente e ecológico sem perder o bom gosto.', likes: 12 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/conceito-de-nuvem-ai-com-braco-robotico_23-2149739748.jpg', createdAt: new Date('2023-06-12'), title: 'IA: conceito, funcionamento e usos', description: 'A inteligência artificial é uma área fascinante e promissora da ciência da computação. Neste post, vou te explicar o que é essa tecnologia, como ela funciona e suas aplicações na sociedade.', likes: 18 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/mulher-determinada-de-construcao-muscular-correndo-enquanto-se-exercita-na-natureza-copie-o-espaco_637285-4877.jpg', createdAt: new Date('2023-06-11'), title: 'Esporte e saúde: como se exercitar bem', description: 'Você sabe quais são os benefícios do esporte para a sua saúde? Neste post, vou te mostrar como a atividade física pode melhorar o seu humor, prevenir doenças e aumentar a sua qualidade de vida.', likes: 10 },
  { imageUrl: 'https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg', createdAt: new Date('2023-06-11'), title: 'Programação para iniciantes: como aprender a codificar do zero', description: 'Você quer aprender a programar, mas não sabe por onde começar? Neste post, vou te dar dicas de como escolher uma linguagem de programação, os melhores recursos online e seus primeiros projetos.', likes: 15 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/fundo-musical-volumetrico-com-uma-clave-de-sol-e-ia-geradora-de-notas_169016-29576.jpg', createdAt: new Date('2023-06-10'), title: 'Músicas para você que quer explorar o mundo do rock', description: 'Gosta de rock e cansou de ouvir só as mesmas músicas? Aqui mostrarei para você desde rock leve ao mais pesado dos rocks.', likes: 15 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/femininos-turistas-na-mao-tem-um-mapa-de-viagem-feliz_1150-7411.jpg', createdAt: new Date('2023-06-10'), title: 'Viagem dos sonhos: como planejar uma aventura incrível pelo mundo', description: 'Você sonha em viajar pelo mundo, mas não sabe como se organizar? Neste post, vou te ensinar como escolher um destino, fazer um roteiro, economizar dinheiro e aproveitar a sua experiência.', likes: 20 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/feliz-desportista-agua-potavel-no-parque_1098-19542.jpg', createdAt: new Date('2023-06-09'), title: 'Saúde mental em tempos de pandemia', description: 'Saiba como lidar com a ansiedade, o estresse e a depressão em tempos difíceis. Aprenda estratégias simples para cuidar da sua saúde mental.', likes: 14 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/sonhando-jovem-empresaria-africana_171337-726.jpg', createdAt: new Date('2023-06-09'), title: 'Carreira profissional: como se destacar no mercado em 2023', description: 'Descubra como se destacar na sua carreira em 2023. Veja dicas de como desenvolver as habilidades mais procuradas pelo mercado de trabalho.', likes: 16 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg', createdAt: new Date('2023-06-08'), title: 'Tecnologia e inovação: as principais tendências para o futuro', description: 'Conheça as novidades que vão revolucionar o mundo da tecnologia nos próximos anos. Saiba mais sobre inteligência artificial, internet das coisas, realidade virtual e outras tendências.', likes: 19 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/artista-feminina-pintura-em-estudio_1303-11428.jpg', createdAt: new Date('2023-06-08'), title: 'Hobbies e lazer: como encontrar um passatempo que te faça feliz', description: 'Descubra como encontrar e aproveitar os seus hobbies. Veja algumas sugestões de atividades divertidas e criativas para fazer no seu tempo livre.', likes: 13 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/vista-da-configuracao-e-do-controlador-de-teclado-para-jogos-de-neon-iluminado_23-2149529357.jpg', createdAt: new Date('2023-06-07'), title: 'Jogos e diversão: os melhores games para jogar em 2023', description: 'Confira os melhores jogos para jogar em 2023. Descubra games incríveis para PC, console e celular. Surpreenda-se com gráficos, histórias e jogabilidade.', likes: 17 },
  { imageUrl: 'https://img.freepik.com/vetores-gratis/plano-de-fundo-padrao-de-educacao-em-estilo-doodle_53876-115365.jpg', createdAt: new Date('2023-06-07'), title: 'Educação e aprendizagem: como estudar de forma eficiente e divertida', description: 'Aprenda a estudar de forma eficiente e divertida. Veja algumas técnicas de estudo que vão te ajudar a memorizar, entender e se divertir mais.', likes: 11 },
  { imageUrl: 'https://img.freepik.com/vetores-gratis/conjunto-de-cultura-e-artes_1284-17358.jpg', createdAt: new Date('2023-06-07'), title: 'Cultura e arte: como apreciar as diferentes formas de expressão humana', description: 'Amplie o seu repertório cultural e artístico. Conheça novas formas de expressão humana. Desenvolva o seu senso crítico e estético.', likes: 12 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-linda-mulher-negra-com-sombras-misteriosas_23-2149095698.jpg', createdAt: new Date('2023-06-06'), title: 'Beleza e autoestima: como se sentir mais bonita e confiante', description: 'Valorize a sua beleza e autoestima. Veja dicas de como cuidar do seu estilo, pele, cabelo e maquiagem. Cultive uma atitude positiva sobre si mesma.', likes: 14 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/closeup-de-economista-usando-calculadora-ao-passar-por-contas-e-impostos-no-escritorio_637285-3156.jpg', createdAt: new Date('2023-06-06'), title: 'Finanças pessoais: dicas para economizar', description: 'Organize as suas finanças pessoais e alcance os seus objetivos. Aprenda a fazer um orçamento, economizar, investir e planejar o seu futuro financeiro.', likes: 16 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/mulher-cozinhar-em-cozinha_1303-12914.jpg', createdAt: new Date('2023-06-09'), title: 'Culinária saudável: receitas deliciosas e nutritivas', description: 'Aprenda a preparar receitas saudáveis e deliciosas. Descubra como cozinhar de forma nutritiva e saborosa. Surpreenda-se com novos sabores e ingredientes.', likes: 15 },
  { imageUrl: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-bela-artista-feminina-de-cabelos-compridos-no-trabalho-em-sua-tela-em-um-estudio_633478-1204.jpg', createdAt: new Date('2023-06-09'), title: 'Arte: como começar a pintar em tela', description: 'Descubra como começar a pintar em tela. Aprenda técnicas básicas de pintura e desenvolva o seu talento artístico. Surpreenda-se com a sua criatividade.', likes: 16 },
  { imageUrl: "https://img.freepik.com/fotos-gratis/amigos-assistindo-servico-de-streaming-juntos-dentro-de-casa_23-2149007920.jpg", createdAt: new Date('2023-06-08'), title: "Cinema: os melhores filmes para assistir em 2023", description: "Confira os melhores filmes para assistir em 2023. Descubra novos lançamentos e clássicos do cinema. Surpreenda-se com histórias emocionantes e atuações incríveis.", likes: 17 },
  { imageUrl: "https://img.freepik.com/fotos-gratis/portriat-asiatico-bonito-da-jovem-senhora-conceito-feliz-do-estilo-de-vida-da-mulher_1150-9025.jpg", createdAt: new Date('2023-06-08'), title: "Literatura: os melhores livros para ler em 2023", description: "Confira os melhores livros para ler em 2023. Descubra novos lançamentos e clássicos da literatura. Surpreenda-se com histórias emocionantes e personagens inesquecíveis.", likes: 18 },
  { imageUrl: "https://img.freepik.com/fotos-gratis/bonitao-africano-com-corte-de-cabelo-elegante-tirando-foto-na-camera-digital_171337-1345.jpg", createdAt: new Date('2023-06-07'), title: "Fotografia: como tirar fotos incríveis com o seu celular", description: "Aprenda a tirar fotos incríveis com o seu celular. Descubra técnicas básicas de fotografia e desenvolva o seu talento artístico. Surpreenda-se com a sua criatividade.", likes: 19 },
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
