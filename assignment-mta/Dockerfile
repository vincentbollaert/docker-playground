FROM node:8

RUN apt-get update && apt-get install -y graphicsmagick

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force
COPY --chown=node:node . .

ENV CHARCOAL_FACTOR=0.1

CMD ["node", "index.js"]
