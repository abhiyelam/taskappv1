# Build Angular
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli

RUN npm run build

# Nginx stage
FROM nginx:alpine

COPY --from=build /app/dist/taskappv1 /usr/share/nginx/html

EXPOSE 80
