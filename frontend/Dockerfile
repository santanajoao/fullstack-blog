FROM node:18.16.1-alpine3.18

USER node

WORKDIR /home/node/app

COPY package*.json .

RUN npm install
# RUN npm ci --only=production

COPY . .
# RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
# CMD [ "start" ]
