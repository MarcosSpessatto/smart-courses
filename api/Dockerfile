FROM node:8.4.0

ADD . /app
WORKDIR /app

RUN npm install -g yarn 
RUN yarn install

CMD ["yarn", "start"]

EXPOSE 3000