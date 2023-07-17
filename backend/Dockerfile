FROM node:18.16.1-alpine3.18

WORKDIR /home/node/app

COPY package*.json .

RUN npm install
# RUN npm ci --only=production

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
# CMD [ "start" ]
