FROM node:16.15-alpine

RUN /bin/sh -c "apk add --no-cache bash"

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /usr/local/lib/node_modules/

RUN chown -R node:node /home/node/app/package*.json

RUN chown -R node:node /usr/local/bin/npm

RUN npm install -g npm@8.12.1

USER node

RUN npm install

COPY --chown=node:node . .

RUN npm -v

EXPOSE 3030

CMD [ "npm", "start" ]

# Build this image using 
# docker build -t kapilpundit/node-js-backend-app .
# And run this image (container) using
# docker run -it --name node-js-backend-app -p 3030:3030 -d kapilpundit/node-js-backend-app