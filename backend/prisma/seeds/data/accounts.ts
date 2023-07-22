import bcrypt from "../../../src/lib/bcrypt";

const encrypt = (
  password: string
): string => bcrypt.encrypt(password, true) as string;

const accounts = [
  {
    id: 'b5a2c7e0-7c5a-4a1e-bd6b-7cfe8c8a7bde',
    username: 'Carla Lorena',
    email: 'carla.lorena@mail.com',
    password: encrypt("password1"),
    imageUrl: 'https://img.freepik.com/fotos-gratis/alegre-mulher-envelhecida-media-com-cabelos-cacheados_1262-20859.jpg',
  },
  {
    id: 'f9fbae01-6c1d-4c9e-9dbf-85db0d6b2e0e',
    username: 'Marcos Vinícis',
    email: 'marcos.vinicius@mail.com',
    password: encrypt("password2"),
    imageUrl: null,
  },
  {
    id: 'd3f3e6eb-fd3a-4df0-bccf-2f9a5dce7c5b',
    username: 'Anderson Souza',
    email: 'anderson.souza@mail.com',
    password: encrypt("password3"),
    imageUrl: null,
  },
  {
    id: '4b6a50d1-cbfa-4e51-b6a1-b9f59fcf71a2',
    username: 'João Pedro',
    email: 'joao.pedro@mail.com',
    password: encrypt("password4"),
    imageUrl: null,
  },
  {
    id: 'c3d0be41-ebdf-4b51-a3d6-c1a7fda2b5c4',
    username: 'Arnaldo Teves',
    email: 'arnaldo.teves@mail.com',
    password: encrypt("password5"),
    imageUrl: null,
  },
  {
    id: '0cfbf9f3-dc24-4e12-bd60-d6a5cddd4b08',
    username: 'Carlos Alberto',
    email: 'carlos.alberto@mail.com',
    password: encrypt("password6"),
    imageUrl: null,
  },
  {
    id: '1d2e6f24-fd27-4f0c-bd18-cb9cd2068a91',
    username: 'Marcos Castro',
    email: 'marcos.castro@mail.com',
    password: encrypt("password7"),
    imageUrl: null,
  },
  {
    id: '8ed71d64-ded2-4e67-a0c1-c5c9ecf719f2',
    username: 'Anderson Silva',
    email: 'anderson.silva@mail.com',
    password: encrypt("password8"),
    imageUrl: null,
  },
  {
    id: '9cf1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'João Gilberto',
    email: 'joao.gilberto@mail.com',
    password: encrypt("password9"),
    imageUrl: null,
  },
  {
    id: '5ad2f0e8-d2df-4ae8-a5cf-e2ddfce219e3',
    username: 'Arnaldo Sacomani' ,
    email: 'arnaldo.sacomani@mail.com' ,
    password: encrypt('password10'),
    imageUrl: null,
  },
  {
    id: '6cf1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'Carla Fernanda' ,
    email: 'carla.fernanda@mail.com' ,
    password: encrypt('password11'),
    imageUrl: null,
  },
  {
    id: '7df1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'Marcos Paulo' ,
    email: 'marcos.paulo@mail.com' ,
    password: encrypt('password12'),
    imageUrl: null,
  },
  {
    id: '8ef1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'Anderson Lima' ,
    email: 'anderson.lima@mail.com' ,
    password: encrypt('password13'),
    imageUrl: null,
  },
  {
    id: '9ff1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'João Victor' ,
    email: 'joao.victor@mail.com' ,
    password: encrypt('password14'),
    imageUrl: null,
  },
  {
    id: 'a0f1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'Arnaldo Santos' ,
    email: 'arnaldo.santos@mail.com' ,
    password: encrypt('password15'),
    imageUrl: null,
  },
  {
    id: 'b1f1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'Carla Maria' ,
    email: 'carla.maria@mail.com' ,
    password: encrypt('password16'),
    imageUrl: null,
  },
  {
    id: 'c2f1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'Marcos Roberto' ,
    email: 'marcos.roberto@mail.com' ,
    password: encrypt('password17'),
    imageUrl: null,
  },
  {
    id: 'd3f1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'Anderson Oliveira' ,
    email: 'anderson.oliveira@mail.com' ,
    password: encrypt('password18'),
    imageUrl: null,
  },
  {
    id: 'e4f1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'João Carlos' ,
    email: 'joao.carlos@mail.com' ,
    password: encrypt('password19'),
    imageUrl: null,
  },
  {
    id: 'f5f1e012-fed2-4ff7-b6cf-d0ddfce219e3',
    username: 'Arnaldo Cezar' ,
    email: 'arnaldo.cezar@mail.com' ,
    password: encrypt('password20'),
    imageUrl: null,
  },
];

export default accounts;
