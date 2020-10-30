FROM node:10

WORKDIR /worker
ADD package.json .
RUN yarn install
ADD . .

CMD ["yarn", "start"]
