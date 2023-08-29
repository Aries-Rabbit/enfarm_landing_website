FROM node:18.14.2-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY . .
RUN yarn install --network-timeout 1000000
RUN yarn install
RUN yarn run build production
RUN yarn global add serve
CMD serve -s build
