FROM node:8.4.0
ADD . /app
WORKDIR /app
RUN npm install
RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build"]

EXPOSE 5000

