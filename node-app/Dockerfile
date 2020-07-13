FROM node:14.5

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

# * - copy only if it exists
COPY --chown=node:node package.json package-lock.json* ./
RUN npm ci

COPY --chown=node:node . .
RUN ["node", "index.js"]
