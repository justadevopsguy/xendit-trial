FROM node:12-alpine

ENV APP_USER=xendit APP_HOME=/home/xendit

COPY ./ ${APP_HOME}/
COPY package*.json ${APP_HOME}/


RUN adduser -D -u 500 -h ${APP_HOME} -s /bin/false ${APP_USER} \
 && chown -R ${APP_USER}:${APP_USER} ${APP_HOME}

USER ${APP_USER}
WORKDIR ${APP_HOME}

RUN npm install && npm install mongoose-morgan
ENTRYPOINT ["sh", "initsvc.sh"]
