FROM node:16.18.1

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build


CMD ["npm", "start"]