import accounts from "./accounts";
import topics from "./topics";
import { getDateBetweenNowAnd } from "../../../src/utils/dates";

const posts = [
  {
    id: "a6f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[19].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como tirar fotos incríveis com o seu celular",
    description: "Você sabia que o seu celular pode ser uma ótima ferramenta para tirar fotos incríveis? Neste post, vamos te dar algumas dicas de como aproveitar ao máximo a câmera do seu smartphone e capturar imagens",
    accountId: accounts[19].id,
    topics: { connect: [{ id: topics[19].id }, { id: topics[8].id }] },
    likes: { create: [{ accountId: accounts[0].id }, { accountId: accounts[1].id }] }
  },
  {
    id: "b7f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[10].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Os melhores jogos de 2023 para PC e consoles",
    description: "O ano de 2023 está cheio de lançamentos imperdíveis para os amantes de jogos eletrônicos. Neste post, vamos te mostrar os melhores jogos de 2023 para PC e consoles, desde os mais esperados até os mai",
    accountId: accounts[8].id,
    topics: { connect: [{ id: topics[10].id }, { id: topics[9].id }] },
    likes: { create: [{ accountId: accounts[2].id }, { accountId: accounts[3].id }] }
  },
  {
    id: "c8f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[14].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como economizar dinheiro e investir melhor em 2023",
    description: "Você quer ter mais controle sobre as suas finanças e fazer o seu dinheiro render mais em 2023? Neste post, vamos te ensinar como economizar dinheiro e investir melhor em 2023, seguindo algumas dicas",
    accountId: accounts[9].id,
    topics: { connect: [{ id: topics[14].id }, { id: topics[7].id }] },
    likes: { create: [{ accountId: accounts[4].id }, { accountId: accounts[5].id }] }
  },
  {
    id: "d9f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[3].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como aprender a programar do zero em 2023",
    description: "Você tem vontade de aprender a programar, mas não sabe por onde começar? Neste post, vamos te mostrar como aprender a programar do zero em 2023, seguindo um passo a passo simples e prático.",
    accountId: accounts[3].id,
    topics: { connect: [{ id: topics[3].id }, { id: topics[11].id }] },
    likes: { create: [{ accountId: accounts[6].id }, { accountId: accounts[7].id }] }
  },
  {
    id: "e0f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[15].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer receitas deliciosas com ingredientes simples",
    description: "Você quer impressionar os seus convidados com receitas deliciosas, mas não tem tempo nem dinheiro para comprar ingredientes sofisticados? Neste post, vamos te ensinar como fazer receitas deliciosas",
    accountId: accounts[10].id,
    topics: { connect: [{ id: topics[15].id }, { id: topics[16].id }] },
    likes: { create: [{ accountId: accounts[8].id }, { accountId: accounts[9].id }] }
  },
  {
    id: "f1f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[6].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como cuidar da sua saúde mental em tempos de pandemia",
    description: "A pandemia do coronavírus trouxe muitos desafios e incertezas para a nossa vida. Muitas pessoas estão sofrendo com ansiedade, estresse, depressão e outros problemas de saúde mental. Neste post, vamos",
    accountId: accounts[6].id,
    topics: { connect: [{ id: topics[6].id }, { id: topics[14].id }] },
    likes: { create: [{ accountId: accounts[10].id }] }
  },
  {
    id: "g2f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[5].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como viajar pelo mundo sem sair de casa",
    description: "Você ama viajar, mas não pode sair de casa por causa da pandemia ou por falta de dinheiro? Não se preocupe, você ainda pode conhecer novos lugares e culturas sem sair do seu sofá. Neste post, vamos",
    accountId: accounts[5].id,
    topics: { connect: [{ id: topics[5].id }, { id: topics[12].id }] },
    likes: { create: [{ accountId: accounts[11].id }, { accountId: accounts[12].id }, { accountId: accounts[13].id }] }
  },
  {
    id: "h3f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[16].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer arte com materiais reciclados",
    description: "Você quer expressar a sua criatividade e ainda ajudar o meio ambiente? Então você vai adorar essa ideia: fazer arte com materiais reciclados. Neste post, vamos te ensinar como fazer arte com",
    accountId: accounts[14].id,
    topics: { connect: [{ id: topics[16].id }, { id: topics[9].id }] },
    likes: { create: [{ accountId: accounts[15].id }] }
  },
  {
    id: "i4f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[7].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como escolher a carreira certa para você",
    description: "Você está em dúvida sobre qual carreira seguir? Você quer saber quais são as suas aptidões, interesses e valores? Neste post, vamos te ajudar a escolher a carreira certa para você, usando alguns",
    accountId: accounts[7].id,
    topics: { connect: [{ id: topics[7].id }, { id: topics[11].id }] },
    likes: { create: [{ accountId: accounts[14].id }, { accountId: accounts[15].id }] }
  },
  {
    id: "j5f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[4].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como tocar violão em 30 dias",
    description: "Você sempre quis aprender a tocar violão, mas nunca teve tempo ou dinheiro para fazer aulas? Neste post, vamos te mostrar como tocar violão em 30 dias, seguindo um método simples e eficiente.",
    accountId: accounts[18].id,
    topics: { connect: [{ id: topics[4].id }, { id: topics[18].id }] },
    likes: { create: [{ accountId: accounts[16].id }] }
  },
  {
    id: "k6f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[13].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como cuidar da sua beleza natural com produtos caseiros",
    description: "Você quer ficar mais bonita e saudável sem gastar muito dinheiro com produtos químicos e artificiais? Neste post, vamos te mostrar como cuidar da sua beleza natural com produtos caseiros, usando",
    accountId: accounts[15].id,
    topics: { connect: [{ id: topics[13].id }] },
    likes: { create: [{ accountId: accounts[17].id }, { accountId: accounts[18].id }] }
  },
  {
    id: "l7f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[11].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como aprender um novo idioma em 2023",
    description: "Você quer expandir os seus horizontes e aprender um novo idioma em 2023? Neste post, vamos te dar algumas dicas de como aprender um novo idioma em 2023, usando aplicativos, cursos",
    accountId: accounts[12].id,
    topics: { connect: [{ id: topics[11].id }, { id: topics[17].id }] },
    likes: { create: [{ accountId: accounts[19].id }] }
  },
  {
    id: "m8f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[2].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como praticar esportes em casa sem equipamentos",
    description: "Você quer manter a forma e a saúde, mas não tem tempo ou dinheiro para ir à academia ou comprar equipamentos? Neste post, vamos te ensinar como praticar esportes em casa sem equipamentos, usando",
    accountId: accounts[2].id,
    topics: { connect: [{ id: topics[2].id }, { id: topics[6].id }] },
    likes: { create: [{ accountId: accounts[1].id }] }
  },
  {
    id: "n9f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[4].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer um podcast de sucesso em 2023",
    description: "Você tem uma ideia incrível para um podcast, mas não sabe como começar ou como divulgar o seu trabalho? Neste post, vamos te mostrar como fazer um podcast de sucesso em 2023, seguindo alguns passos",
    accountId: accounts[4].id,
    topics: { connect: [{ id: topics[4].id }, { id: topics[8].id }] },
    likes: { create: [{ accountId: accounts[0].id }] }
  },
  {
    id: "o0f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[18].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como escrever um livro em 30 dias",
    description: "Você tem o sonho de escrever um livro, mas não sabe por onde começar ou como terminar? Neste post, vamos te ensinar como escrever um livro em 30 dias, seguindo um método simples e eficaz. Você vai",
    accountId: accounts[17].id,
    topics: { connect: [{ id: topics[18].id }, { id: topics[12].id }] },
    likes: { create: [{ accountId: accounts[18].id }] }
  },
  {
    id: "p1f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[15].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer um bolo de chocolate delicioso e fácil",
    description: "Você adora bolo de chocolate, mas não sabe como fazer um que fique fofinho, molhadinho e saboroso? Neste post, vamos te ensinar como fazer um bolo de chocolate delicioso e fácil, usando apenas alguns",
    accountId: accounts[11].id,
    topics: { connect: [{ id: topics[15].id }, { id: topics[13].id }] },
    likes: { create: [{ accountId: accounts[12].id }] }
  },
  {
    id: "q2f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[7].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como se preparar para uma entrevista de emprego em 2023",
    description: "Você está procurando um novo emprego em 2023, mas não sabe como se preparar para uma entrevista de emprego? Neste post, vamos te dar algumas dicas de como se preparar para uma entrevista de emprego",
    accountId: accounts[16].id,
    topics: { connect: [{ id: topics[7].id }, { id: topics[14].id }] },
    likes: { create: [{ accountId: accounts[17].id }] }
  },
  {
    id: "r3f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[17].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como assistir aos melhores filmes de 2023 sem sair de casa",
    description: "Você é um cinéfilo de carteirinha, mas não pode ir ao cinema por causa da pandemia ou por falta de dinheiro? Não se preocupe, você ainda pode assistir aos melhores filmes de 2023 sem sair de casa",
    accountId: accounts[13].id,
    topics: { connect: [{ id: topics[17].id }, { id: topics[8].id }] },
    likes: { create: [{ accountId: accounts[14].id }] }
  },
  {
    id: "s4f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[4].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como tocar guitarra em 30 dias",
    description: "Você sempre quis aprender a tocar guitarra, mas nunca teve tempo ou dinheiro para fazer aulas? Neste post, vamos te mostrar como tocar guitarra em 30 dias, seguindo um método simples e eficiente.",
    accountId: accounts[1].id,
    topics: { connect: [{ id: topics[4].id }, { id: topics[18].id }] },
    likes: { create: [{ accountId: accounts[2].id }] }
  },
  {
    id: "t5f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[13].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como cuidar do seu cabelo cacheado com produtos naturais",
    description: "Você tem cabelos cacheados, mas não sabe como cuidar deles com produtos naturais? Neste post, vamos te mostrar como cuidar do seu cabelo cacheado com produtos naturais, usando ingredientes naturais",
    accountId: accounts[0].id,
    topics: { connect: [{ id: topics[13].id }] },
    likes: { create: [{ accountId: accounts[1].id }] }
  },
  {
    id: "u6f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[1].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer um jardim vertical com garrafas pet",
    description: "Você quer ter um jardim bonito e sustentável na sua casa, mas não tem espaço ou dinheiro para comprar vasos e plantas? Neste post, vamos te ensinar como fazer um jardim vertical com garrafas pet",
    accountId: accounts[9].id,
    topics: { connect: [{ id: topics[1].id }, { id: topics[16].id }] },
    likes: { create: [{ accountId: accounts[10].id }] }
  },
  {
    id: "v7f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[4].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como aprender a tocar piano em 30 dias",
    description: "Você sempre quis aprender a tocar piano, mas nunca teve tempo ou dinheiro para fazer aulas? Neste post, vamos te mostrar como aprender a tocar piano em 30 dias, seguindo um método simples e eficiente",
    accountId: accounts[18].id,
    topics: { connect: [{ id: topics[4].id }, { id: topics[18].id }] },
    likes: { create: [{ accountId: accounts[19].id }] }
  },
  {
    id: "w8f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[15].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer uma horta orgânica em casa",
    description: "Você quer ter alimentos frescos, saudáveis e sem agrotóxicos na sua mesa, mas não sabe como cultivar uma horta orgânica em casa? Neste post, vamos te ensinar como fazer uma horta orgânica em casa",
    accountId: accounts[10].id,
    topics: { connect: [{ id: topics[15].id }, { id: topics[1].id }] },
    likes: { create: [{ accountId: accounts[11].id }] }
  },
  {
    id: "x9f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[7].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer um currículo de sucesso em 2023",
    description: "Você está procurando um novo emprego em 2023, mas não sabe como fazer um currículo de sucesso? Neste post, vamos te dar algumas dicas de como fazer um currículo de sucesso em 2023, como escolher",
    accountId: accounts[16].id,
    topics: { connect: [{ id: topics[7].id }, { id: topics[14].id }] },
    likes: { create: [{ accountId: accounts[17].id }] }
  },
  {
    id: "y0f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: topics[13].imageUrl,
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer uma maquiagem simples e bonita para o dia a dia",
    description: "Você quer ficar mais bonita e confiante no seu dia a dia, mas não sabe como fazer uma maquiagem simples e bonita? Neste post, vamos te ensinar como fazer uma maquiagem simples e bonita para o dia",
    accountId: accounts[15].id,
    topics: { connect: [{ id: topics[13].id }, { id: topics[0].id }] },
  },
];

export default posts;
