FROM node:20-alpine3.17 AS builder
ENV CI=true BUILD_NUMBER=1
USER root
WORKDIR /app
COPY . .
RUN npm config set registry https://registry.npmmirror.com && npm i -g pnpm
RUN pnpm i
RUN pnpm run build:ssr

FROM node:20-alpine3.17 AS prod
ENV workdir=/app
WORKDIR ${workdir}
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
USER root
ENTRYPOINT npm run serve:ssr
