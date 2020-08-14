# fill in the blanks to dockerize this node app
FROM node:10-alpine

EXPOSE 3000
RUN apk add --no-cache tini

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock*.json ./

# remove leftover files downloaded for smaller build
RUN npm ci && npm cache clean --force
COPY --chown=node:node . .

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "app.js"]
