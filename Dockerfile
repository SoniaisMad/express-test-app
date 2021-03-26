FROM node:10-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY app .

EXPOSE 8080

CMD [ "node", "server.js" ]