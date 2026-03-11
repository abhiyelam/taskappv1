# Build Angular
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli

RUN node --max_old_space_size=4096 ./node_modules/@angular/cli/bin/ng build --configuration production

# Nginx stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/taskappv1/browser /usr/share/nginx/html

EXPOSE 80
