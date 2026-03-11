# Stage 1: Build Angular
FROM node:20 AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --configuration production

# Stage 2: Run with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/taskappv1 /usr/share/nginx/html

EXPOSE 80
