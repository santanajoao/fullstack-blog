FROM node:18.16.1-alpine3.18

WORKDIR /home/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
