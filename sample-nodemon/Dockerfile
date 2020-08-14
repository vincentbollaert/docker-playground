FROM node:10-slim

ENV NODE_ENV=production
# update path env so that non-global dev tools can be run without full path
# npx would kinda solve this i think
ENV PATH /app/node_modules/.bin/:$PATH

WORKDIR /app

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["node", "./bin/www"]
