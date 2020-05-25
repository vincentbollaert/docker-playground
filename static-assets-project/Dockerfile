# build stage
FROM node:latest
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# run stage
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
