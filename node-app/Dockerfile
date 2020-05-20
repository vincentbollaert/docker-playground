FROM node:12-stretch

USER node

# creating this as node user gives it permissions. otherwise it is owned by root
RUN mkdir /home/node/code

WORKDIR /home/node/code

# docker caches all steps. copy over cached (if already run) package files and run ci before copying over rest
# so that changing a port or something won't cause npm ci to run needlessly again
COPY --chown=node:node package-lock.json package.json ./
RUN npm ci

# means copy everything from here to there - there being workdir -- inside the container
COPY --chown=node:node . .


CMD ["node", "index.js"]
