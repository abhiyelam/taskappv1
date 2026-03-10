FROM node:20 AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# nginx stage
FROM nginx:alpine

COPY --from=build /app/dist/taskappv1/browser /usr/share/nginx/html

EXPOSE 80
