# Stage 1: Build Angular
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx ng build --configuration production

# ---------- Runtime ----------
FROM nginx:alpine

COPY --from=build /app/dist/taskapp /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
