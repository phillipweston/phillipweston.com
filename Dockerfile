FROM node:lts

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

ENV PORT 8080 

RUN npm install
RUN npm run build

CMD npm run start

EXPOSE 8080
