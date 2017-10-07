# Dockerfile baseado nas instruções da documentação da plataforma NodeJS
# Referência: https://nodejs.org/uk/docs/guides/nodejs-docker-webapp/
#
FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY config /usr/src/app/config
COPY public /usr/src/app/public
COPY server.js /usr/src/app/
COPY gulpfile.js /usr/src/app/

RUN npm install gulp-cli -g
RUN npm install
EXPOSE 3000

RUN gulp clean
RUN gulp copy
CMD ["npm", "start"]
