FROM node:12-stretch

USER node

# creating this as node user gives it permissions. otherwise it is owned by root
RUN mkdir /home/node/code

WORKDIR /home/node/code

# . . (instead of specific files like last time)
# means copy everything from here to there - there being workdir -- inside the container
COPY --chown=node:node . .

# npm ci installs based off of lock file instead of package.json
RUN npm ci
# but this gives a permissions error, because . is owned by root user, not node

CMD ["node", "index.js"]
