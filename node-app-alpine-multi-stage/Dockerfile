# build stage
FROM node:12-stretch
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .

# runtime stage - does not include npm so you save about 10mb
# NOTE: this is not actually displaying in the browser. find out why
FROM alpine:3.10
RUN apk add --update nodejs-current
RUN addgroup -S node && adduser -S node -G node
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --from=0 --chown=node:node /build .
CMD ["node", "index.js"]
