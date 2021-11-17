## Dockerfile for Vite
## https://hub.docker.com/_/node
FROM node:16-alpine as dist

WORKDIR /usr/project

COPY . .
RUN npm install
RUN npm run build

FROM node:16-alpine

WORKDIR /usr/project

COPY --from=dist /usr/project/dist ./dist
COPY package*.json ./
RUN npm ci --only=production

EXPOSE 5000

CMD [ "npm", "run", "serve"]
