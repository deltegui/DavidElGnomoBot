FROM node:15.14.0-alpine3.10
RUN mkdir /david
COPY . /david/
WORKDIR /david/
RUN npm ci
ENV DISCORD_TOKEN ''
ENV NFSW "false"
ENTRYPOINT npm start