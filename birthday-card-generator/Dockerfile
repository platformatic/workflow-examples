FROM node:22-alpine

ENV APP_HOME=/home/app/node/

RUN mkdir -p $APP_HOME/node_modules && chown -R node:node $APP_HOME
RUN npm install -g "@platformatic/watt-extra@latest" "pnpm@10"

WORKDIR $APP_HOME

COPY ./ ./

# Temporary: we need for private modules
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc pnpm install

EXPOSE 3042
EXPOSE 9090

RUN pnpm run build
ENV PLT_ICC_URL="http://icc.platformatic.svc.cluster.local"
ENV WORKFLOW_TARGET_WORLD="@platformatic/world"
ENV PLT_WORLD_SERVICE_URL="http://workflow.platformatic.svc.cluster.local"

CMD [ "watt-extra", "start" ]
