import accounts from "./accounts";
import topics from "./topics";
import { getDateBetweenNowAnd } from "../../../src/utils/dates";

const posts = [
  {
    id: "a6f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como tirar fotos incríveis com o seu celular",
    description: "Você sabia que o seu celular pode ser uma ótima ferramenta para tirar fotos incríveis? Neste post, vamos te dar algumas dicas de como aproveitar ao máximo a câmera do seu smartphone e capturar imagens de qualidade profissional.",
    accountId: accounts[19].id,
    topics: { connect: [{ id: topics[19].id }, { id: topics[8].id }] }
  },
  {
    id: "b7f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Os melhores jogos de 2023 para PC e consoles",
    description: "O ano de 2023 está cheio de lançamentos imperdíveis para os amantes de jogos eletrônicos. Neste post, vamos te mostrar os melhores jogos de 2023 para PC e consoles, desde os mais esperados até os mais surpreendentes.",
    accountId: accounts[8].id,
    topics: { connect: [{ id: topics[10].id }, { id: topics[9].id }] }
  },
  {
    id: "c8f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como economizar dinheiro e investir melhor em 2023",
    description: "Você quer ter mais controle sobre as suas finanças e fazer o seu dinheiro render mais em 2023? Neste post, vamos te ensinar como economizar dinheiro e investir melhor em 2023, seguindo algumas dicas simples e eficazes.",
    accountId: accounts[9].id,
    topics: { connect: [{ id: topics[14].id }, { id: topics[7].id }] }
  },
  {
    id: "d9f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como aprender a programar do zero em 2023",
    description: "Você tem vontade de aprender a programar, mas não sabe por onde começar? Neste post, vamos te mostrar como aprender a programar do zero em 2023, seguindo um passo a passo simples e prático.",
    accountId: accounts[3].id,
    topics: { connect: [{ id: topics[3].id }, { id: topics[11].id }] }
  },
  {
    id: "e0f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer receitas deliciosas com ingredientes simples",
    description: "Você quer impressionar os seus convidados com receitas deliciosas, mas não tem tempo nem dinheiro para comprar ingredientes sofisticados? Neste post, vamos te ensinar como fazer receitas deliciosas com ingredientes simples que você tem na sua cozinha.",
    accountId: accounts[10].id,
    topics: { connect: [{ id: topics[15].id }, { id: topics[16].id }] }
  },
  {
    id: "f1f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como cuidar da sua saúde mental em tempos de pandemia",
    description: "A pandemia do coronavírus trouxe muitos desafios e incertezas para a nossa vida. Muitas pessoas estão sofrendo com ansiedade, estresse, depressão e outros problemas de saúde mental. Neste post, vamos te dar algumas dicas de como cuidar da sua saúde mental em tempos de pandemia, como praticar exercícios físicos, meditar, buscar apoio profissional e manter uma rotina saudável.",
    accountId: accounts[6].id,
    topics: { connect: [{ id: topics[6].id }, { id: topics[14].id }] }
  },
  {
    id: "g2f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como viajar pelo mundo sem sair de casa",
    description: "Você ama viajar, mas não pode sair de casa por causa da pandemia ou por falta de dinheiro? Não se preocupe, você ainda pode conhecer novos lugares e culturas sem sair do seu sofá. Neste post, vamos te mostrar como viajar pelo mundo sem sair de casa, usando a internet, livros, filmes, músicas e outras formas de entretenimento.",
    accountId: accounts[5].id,
    topics: { connect: [{ id: topics[5].id }, { id: topics[12].id }] }
  },
  {
    id: "h3f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer arte com materiais reciclados",
    description: "Você quer expressar a sua criatividade e ainda ajudar o meio ambiente? Então você vai adorar essa ideia: fazer arte com materiais reciclados. Neste post, vamos te ensinar como fazer arte com materiais reciclados, como garrafas pet, latas, papelão, jornal e outros objetos que você pode encontrar na sua casa ou na rua.",
    accountId: accounts[14].id,
    topics: { connect: [{ id: topics[16].id }, { id: topics[9].id }] }
  },
  {
    id: "i4f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como escolher a carreira certa para você",
    description: "Você está em dúvida sobre qual carreira seguir? Você quer saber quais são as suas aptidões, interesses e valores? Neste post, vamos te ajudar a escolher a carreira certa para você, usando alguns testes vocacionais, pesquisando sobre as profissões e conversando com profissionais da área.",
    accountId: accounts[7].id,
    topics: { connect: [{ id: topics[7].id }, { id: topics[11].id }] }
  },
  {
    id: "j5f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como tocar violão em 30 dias",
    description: "Você sempre quis aprender a tocar violão, mas nunca teve tempo ou dinheiro para fazer aulas? Neste post, vamos te mostrar como tocar violão em 30 dias, seguindo um método simples e eficiente. Você vai aprender os acordes básicos, as batidas mais usadas, as músicas mais fáceis e as dicas mais importantes para se tornar um violonista.",
    accountId: accounts[18].id,
    topics: { connect: [{ id: topics[4].id }, { id: topics[18].id }] }
  },
  {
    id: "k6f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como cuidar da sua beleza natural com produtos caseiros",
    description: "Você quer ficar mais bonita e saudável sem gastar muito dinheiro com produtos químicos e artificiais? Neste post, vamos te mostrar como cuidar da sua beleza natural com produtos caseiros, usando ingredientes naturais e acessíveis, como mel, aveia, aloe vera e outros.",
    accountId: accounts[15].id,
    topics: { connect: [{ id: topics[13].id }, { id: topics[15].id }] }
  },
  {
    id: "l7f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como aprender um novo idioma em 2023",
    description: "Você quer expandir os seus horizontes e aprender um novo idioma em 2023? Neste post, vamos te dar algumas dicas de como aprender um novo idioma em 2023, usando aplicativos, cursos online, podcasts, livros e outras ferramentas que vão te ajudar a dominar a língua desejada.",
    accountId: accounts[12].id,
    topics: { connect: [{ id: topics[11].id }, { id: topics[17].id }] }
  },
  {
    id: "m8f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como praticar esportes em casa sem equipamentos",
    description: "Você quer manter a forma e a saúde, mas não tem tempo ou dinheiro para ir à academia ou comprar equipamentos? Neste post, vamos te ensinar como praticar esportes em casa sem equipamentos, usando apenas o seu corpo e alguns objetos que você tem na sua casa, como cadeiras, garrafas, toalhas e outros.",
    accountId: accounts[2].id,
    topics: { connect: [{ id: topics[2].id }, { id: topics[6].id }] }
  },
  {
    id: "n9f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer um podcast de sucesso em 2023",
    description: "Você tem uma ideia incrível para um podcast, mas não sabe como começar ou como divulgar o seu trabalho? Neste post, vamos te mostrar como fazer um podcast de sucesso em 2023, seguindo alguns passos essenciais, como escolher um tema, definir um formato, gravar e editar o áudio, publicar e promover o seu podcast.",
    accountId: accounts[4].id,
    topics: { connect: [{ id: topics[4].id }, { id: topics[8].id }] }
  },
  {
    id: "o0f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como escrever um livro em 30 dias",
    description: "Você tem o sonho de escrever um livro, mas não sabe por onde começar ou como terminar? Neste post, vamos te ensinar como escrever um livro em 30 dias, seguindo um método simples e eficaz. Você vai aprender como planejar a sua história, desenvolver os seus personagens, escrever os seus capítulos e revisar o seu texto.",
    accountId: accounts[17].id,
    topics: { connect: [{ id: topics[18].id }, { id: topics[12].id }] }
  },
  {
    id: "p1f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer um bolo de chocolate delicioso e fácil",
    description: "Você adora bolo de chocolate, mas não sabe como fazer um que fique fofinho, molhadinho e saboroso? Neste post, vamos te ensinar como fazer um bolo de chocolate delicioso e fácil, usando apenas alguns ingredientes que você tem na sua despensa, como farinha, açúcar, ovos, chocolate em pó e leite condensado.",
    accountId: accounts[11].id,
    topics: { connect: [{ id: topics[15].id }, { id: topics[13].id }] }
  },
  {
    id: "q2f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como se preparar para uma entrevista de emprego em 2023",
    description: "Você está procurando um novo emprego em 2023, mas não sabe como se preparar para uma entrevista de emprego? Neste post, vamos te dar algumas dicas de como se preparar para uma entrevista de emprego em 2023, como pesquisar sobre a empresa, revisar o seu currículo, treinar as suas respostas e causar uma boa impressão.",
    accountId: accounts[16].id,
    topics: { connect: [{ id: topics[7].id }, { id: topics[14].id }] }
  },
  {
    id: "r3f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como assistir aos melhores filmes de 2023 sem sair de casa",
    description: "Você é um cinéfilo de carteirinha, mas não pode ir ao cinema por causa da pandemia ou por falta de dinheiro? Não se preocupe, você ainda pode assistir aos melhores filmes de 2023 sem sair de casa, usando plataformas de streaming, sites de download, torrents e outras formas de acesso online.",
    accountId: accounts[13].id,
    topics: { connect: [{ id: topics[17].id }, { id: topics[8].id }] }
  },
  {
    id: "s4f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como tocar guitarra em 30 dias",
    description: "Você sempre quis aprender a tocar guitarra, mas nunca teve tempo ou dinheiro para fazer aulas? Neste post, vamos te mostrar como tocar guitarra em 30 dias, seguindo um método simples e eficiente. Você vai aprender os acordes básicos, as escalas mais usadas, as músicas mais fáceis e as dicas mais importantes para se tornar um guitarrista.",
    accountId: accounts[1].id,
    topics: { connect: [{ id: topics[4].id }, { id: topics[18].id }] }
  },
  {
    id: "t5f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como cuidar do seu cabelo cacheado com produtos naturais",
    description: "Você tem cabelos cacheados, mas não sabe como cuidar deles com produtos naturais? Neste post, vamos te mostrar como cuidar do seu cabelo cacheado com produtos naturais, usando ingredientes naturais e acessíveis, como óleo de coco, vinagre de maçã, babosa e outros.",
    accountId: accounts[0].id,
    topics: { connect: [{ id: topics[13].id }, { id: topics[15].id }] }
  },
  {
    id: "u6f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer um jardim vertical com garrafas pet",
    description: "Você quer ter um jardim bonito e sustentável na sua casa, mas não tem espaço ou dinheiro para comprar vasos e plantas? Neste post, vamos te ensinar como fazer um jardim vertical com garrafas pet, usando apenas alguns materiais que você pode encontrar na sua casa ou na rua, como garrafas pet, tesoura, barbante e terra.",
    accountId: accounts[9].id,
    topics: { connect: [{ id: topics[1].id }, { id: topics[16].id }] }
  },
  {
    id: "v7f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como aprender a tocar piano em 30 dias",
    description: "Você sempre quis aprender a tocar piano, mas nunca teve tempo ou dinheiro para fazer aulas? Neste post, vamos te mostrar como aprender a tocar piano em 30 dias, seguindo um método simples e eficiente. Você vai aprender as notas musicais, os acordes básicos, as músicas mais fáceis e as dicas mais importantes para se tornar um pianista.",
    accountId: accounts[18].id,
    topics: { connect: [{ id: topics[4].id }, { id: topics[18].id }] }
  },
  {
    id: "w8f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer uma horta orgânica em casa",
    description: "Você quer ter alimentos frescos, saudáveis e sem agrotóxicos na sua mesa, mas não sabe como cultivar uma horta orgânica em casa? Neste post, vamos te ensinar como fazer uma horta orgânica em casa, usando apenas alguns materiais que você tem na sua casa ou na rua, como caixas de leite, garrafas pet, terra e sementes.",
    accountId: accounts[10].id,
    topics: { connect: [{ id: topics[15].id }, { id: topics[1].id }] }
  },
  {
    id: "x9f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer um currículo de sucesso em 2023",
    description: "Você está procurando um novo emprego em 2023, mas não sabe como fazer um currículo de sucesso? Neste post, vamos te dar algumas dicas de como fazer um currículo de sucesso em 2023, como escolher o formato adequado, destacar as suas qualificações, experiências e habilidades, e evitar erros comuns.",
    accountId: accounts[16].id,
    topics: { connect: [{ id: topics[7].id }, { id: topics[14].id }] }
  },
  {
    id: "y0f1e012-fed2-4ff7-b6cf-d0ddfce219e3",
    imageUrl: '',
    createdAt: getDateBetweenNowAnd(7),
    title: "Como fazer uma maquiagem simples e bonita para o dia a dia",
    description: "Você quer ficar mais bonita e confiante no seu dia a dia, mas não sabe como fazer uma maquiagem simples e bonita? Neste post, vamos te ensinar como fazer uma maquiagem simples e bonita para o dia a dia, usando apenas alguns produtos básicos que você tem na sua necessaire, como base, corretivo, rímel e batom.",
    accountId: accounts[15].id,
    topics: { connect: [{ id: topics[13].id }, { id: topics[0].id }] }
  },
];

export default posts;
