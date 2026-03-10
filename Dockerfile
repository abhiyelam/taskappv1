# Stage 1: Build Angular App
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx ng build --configuration production

# Stage 2: Run with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/taskapp/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
