FROM node:14.5

USER node
ENV home=/home/node/app

RUN mkdir $home
WORKDIR $home

COPY --chown=node:node package.json package-lock.json* ./
RUN npm ci

COPY --chown=node:node . .
RUN ["node", "index.js"]
