FROM node:10-slim as prod
ENV NODE_ENV=production
WORKDIR /app
EXPOSE 3000
COPY package.json package-lock*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
CMD ["node", "./bin/www"]

FROM prod as dev
ENV NODE_ENV=development
RUN npm install --only=development
ENTRYPOINT [ "npm" ]
CMD [ "npm", "dev" ]

FROM dev as test
ENV NODE_ENV=development
ENTRYPOINT [ "npm" ]
CMD [ "run", "test" ]
