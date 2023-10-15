FROM node:18.16.1 as build

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.16.1

WORKDIR /home/app

COPY --from=build /home/app/build/ ./
COPY --from=build /home/app/prisma/migrations/ ./prisma/migrations/
COPY --from=build /home/app/prisma/schema.prisma ./prisma/
COPY --from=build /home/app/package*.json ./

RUN npm install --omit=dev

EXPOSE 3001

ENTRYPOINT [ "npm" ]

CMD [ "run", "start" ]
