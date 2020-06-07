FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn global add serve
CMD serve -s build
EXPOSE 5000

COPY package.json package.json
RUN yarn

COPY . .

RUN yarn run build