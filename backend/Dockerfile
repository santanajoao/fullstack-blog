FROM node:18.16.1

WORKDIR /home/node/app

COPY package*.json .

RUN chown -R node:node package*.json

RUN npm install

RUN chown -R node:node .

USER node

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
