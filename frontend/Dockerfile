FROM node:18.16.1

WORKDIR /home/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
