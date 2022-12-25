FROM node:16.17.0-alpine

RUN apk add --update --no-cache curl py-pip make g++

WORKDIR /usr/src/app
