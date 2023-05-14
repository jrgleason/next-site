# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /app
COPY . /app
RUN npm ci
CMD npm run dev