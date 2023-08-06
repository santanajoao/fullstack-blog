# 🚧 Em desenvolvimento 🚧

# fullstack-blog

Um blog comunitário desenvolvido utilizando Next.js, Express, MySQL, Prisma e Tailwind.

<img src="images/blog-screenshot.png" alt="captura da tela inicial do blog" />

## Sobre 🔍

Um blog comunitário onde é possível explorar as postagens, tópicos e autores. Todos podem criar sua conta e começarem a escrever e compartilhar.

O blog possui páginas de signin e signup com validações dos campos feitas tanto no cliente quanto no servidor onde é possível entrar ou criar sua conta. É possível buscar posts por um tópico e filtar a ordem de exibição, por data de criação, likes, ou os posts em alta.

Haverá uma página para uma postagem onde é possível ler o conteúdo da publicação, onde também é exibido o autor e a quantidade de likes. Uma página do autor onde será possível ver a quantidade total de posts e likes de um autor e a listagem de posts que poderá ser ordenada pelos mesmos critérios dos tópicos. Uma página de perfil do usuário onde será possível ver e alterar seus dados.

## Tecnologias Utilizadas 💻

### Frontend

- Next.js
- nookies
- react-icons
- react-hook-form
- Tailwind CSS
- react-markdown
- axios

### Backend

- Prisma
- Bcrypt
- jsonwebtoken
- express
- chai
- sinon
- mocha
- helmet
- cors

### Geral

- Typescript
- zod
- Eslint
- Docker, Dockerfile e docker compose
- Figma

### Como executar o projeto ⚙️

> Obs: Os arquivos docker no momento são de desenvolvimento e não uma build de produção, por isso o carregamento das páginas pela primeira vez pode ser um pouco lento

1. Clone o repositório

2. Renomeie o arquivo `.env.example` para `.env`

3. (Opcional) Preencha as variáveis de ambiente

> As variáveis no arquivo .env.example já são o suficiente para executar o projeto

4. Rode `docker compose up -d`

5. Acesse http://localhost:3000

### Próximos passos

- [ ] Página de perfil (Atualmente em desenvolvimento)
- [ ] Página sobre o uso de cookies
- [ ] Página para escrever um post / Editor de posts
