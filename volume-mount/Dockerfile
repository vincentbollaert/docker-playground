FROM node:12-alpine
COPY --chown=node:node . /src
WORKDIR /src
CMD ["node", "index.js"]

# if you run this normally, the txt file is not incremented because it's destroyed
# once the container dies, but using a volume mount (bind works too, but you have to manage security and backups on your own)
# it is persisted
