FROM node:18.16.1 as build

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm" ]

CMD [ "run", "dev" ]
