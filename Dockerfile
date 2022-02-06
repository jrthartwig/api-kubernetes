FROM node:alpine

WORKDIR /usr/share/app

COPY . .

RUN npm ci 

EXPOSE 80

CMD ["npm", "run", "start:production"]