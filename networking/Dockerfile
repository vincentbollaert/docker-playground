FROM node:12-stretch

USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --chown=node:node package-lock.json package.json ./
RUN npm ci
COPY --chown=node:node . .

CMD ["node", "index.js"]


# docker run --rm -p 3000:3000 --network=my-bridge-network --env MONGO_CONNECTION_STRING=mongodb://db:27017 node-with-mongo
# my-bridge-network is name of bridge network i created
# db:27017 db is name of mongo client container i started in background
# node-with-mongo is name of container
# this is overly complicated, and compose does this for you
