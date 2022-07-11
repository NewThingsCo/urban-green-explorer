## Dockerfile for Vite
## https://hub.docker.com/_/node
FROM node:16-alpine as dist

WORKDIR /usr/project

COPY . .
RUN npm ci
RUN npm run build

FROM node:16-alpine

WORKDIR /usr/project

COPY --from=dist /usr/project/dist ./dist
COPY package*.json ./
COPY scripts/* ./scripts/
RUN npm set-script prepare ""
RUN npm ci --omit=dev

EXPOSE 8080

CMD [ "npm", "start", "-- --port=8080"]
