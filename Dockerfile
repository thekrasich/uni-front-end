FROM node:19-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY public public
COPY src src

RUN npm ci
RUN npm i serve

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npx", "serve", "build"]

