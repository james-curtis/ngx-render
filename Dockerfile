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
RUN apk --no-cache add curl
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
EXPOSE 4000
USER root
HEALTHCHECK CMD curl http://localhost:4000 -f || exit 1
ENTRYPOINT npm run serve:ssr
