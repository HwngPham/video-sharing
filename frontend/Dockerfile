FROM node:18.16 as builder

WORKDIR /tmp/build
COPY . .

RUN npm install
RUN npm run build

FROM node:18.16-alpine as runnder

WORKDIR /usr/app

RUN npm i express
COPY --from=builder /tmp/build/dist ./dist
COPY --from=builder /tmp/build/server.cjs server.cjs

EXPOSE 8000
CMD ["node", "./server.cjs"]
