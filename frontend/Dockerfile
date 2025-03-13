FROM node:18-alpine

RUN npm install -g serve
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]