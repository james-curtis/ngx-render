FROM node:20-alpine3.17 AS builder
ENV CI=true BUILD_NUMBER=1
USER root
WORKDIR /data/app
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build:ssr

FROM node:20-alpine3.17 AS prod
ENV workdir=/data/app
WORKDIR ${workdir}
COPY --from=builder /data/app/dist .
USER root
ENTRYPOINT node ngx-render/server/main.js
