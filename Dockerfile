 FROM node:16.16

 WORKDIR / app

 COPY package*.json ./

 RUN npm install

 COPY . .

 CDM ["node", "index.js "]