FROM node:latest

WORKDIR /source

COPY . /source

EXPOSE 5000

#RUN npm run lint

RUN npm run build

ENTRYPOINT ["npm", "start"]
