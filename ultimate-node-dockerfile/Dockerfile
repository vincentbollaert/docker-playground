FROM node:14.7-slim as base
# ---
LABEL org.opencontainers.image.authors=vincentbollaert@gmail.com.com
LABEL org.opencontainers.image.title="ultimate node dockerfile"
LABEL org.opencontainers.image.licenses=MIT
LABEL com.bretfisher.nodeversion=$NODE_VERSION
# ---
ENV NODE_ENV=production
ADD https://github.com/krallin/tini/releases/download/v0.19.0/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]
# lower ports are reserverd for root user, so need to bump port if want to run as node
EXPOSE 8080
WORKDIR /app
COPY package*.json ./
RUN npm config list

RUN npm ci \
    && npm cache clean --force \
    && apt-get clean \
    && rm -rf /app/var/lib/apt/lists/*

ENV PATH /app/node_modules/.bin:$PATH

FROM base as dev
ENV NODE_ENV=development
RUN apt-get update -qq && apt-get install -qy \ 
    ca-certificates \
    bzip2 \
    curl \
    libfontconfig \
    --no-install-recommends \
    && apt-get clean \
    && rm -rf /app/var/lib/apt/lists/*

RUN npm config list
RUN npm install --only=development \
    && npm cache clean --force
USER node
CMD [ "nodemon", "server.js" ]

FROM dev as test
USER root
# RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/master/contrib/install.sh | sh -s -- -b /usr/local/bin \
#     && trivy filesystem --exit-code 1 --no-progress /
# RUN npm audit
COPY . .

FROM test as pre-prod

# need to remove in intermediate step, otherwise the files still exist just do not show
RUN rm -rf ./tests && rm -rf ./node_modules

FROM base as prod
# could just . . instead of /app /app but apparently it screws up sometimes. try it
COPY --from=pre-prod /app /app
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "curl http://127.0.0.1/ || exit 1" ]
CMD ["node", "server.js"]
USER node
