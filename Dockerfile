FROM node:16.13

WORKDIR /web

COPY . /web

RUN npm -g install pnpm pm2

CMD [ "pm2-runtime", "--raw" , "app.js" ]