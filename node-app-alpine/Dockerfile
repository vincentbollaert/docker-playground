# using alpine over debian is recommended for prod because it is smaller which reduces sec vulns
# debian container total incl node is 900 whereas alpine is 80 (node:12-alpine)
# alpine itself is just 5
# for the shist, here I am making my own node-alpine img to reduce the size to 50
# note that alpine uses ash (sh) and not bash

FROM alpine:latest

# alpine package manager not to be confused with android
# get latest versions before doing anything else
# NOTE: had to end docker build with --network=host to update
# docker build --rm --tag test . --network=host
RUN apk add --update nodejs npm

# called node and add that user to group called node
RUN addgroup -S node && adduser -S node -G node
USER node

RUN mkdir /home/node/code
WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json ./
RUN npm ci

COPY --chown=node:node . .

CMD ["node", "index.js"]
