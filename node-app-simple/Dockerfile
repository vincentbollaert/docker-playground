FROM node:14.5

# commands
# whoami

# executes as node user (a user the container authors created called node) for reduced security risk
USER node

# the home dir of the node user, under w/e folder. let's say code
# can test this by appending whoami to run
WORKDIR /home/node/app

COPY --chown=node:node index.js index.js

# can also use add
# add can pull from external sources, like github. and also auto unzips
# ADD --chown=node:node index.js index.js

CMD ["node", "index.js"]
