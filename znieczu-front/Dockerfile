FROM node:9.11.1-alpine

# make the 'app' folder the current working directory
RUN mkdir /znieczu-front
WORKDIR /znieczu-front

# copy package.json to the /app/ folder
COPY ./package.json ./
# https://docs.npmjs.com/cli/cache
RUN npm cache verify
# install project dependencies

RUN npm i npm@latest -g
RUN npm install
RUN ls
RUN npm run build
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . ./znieczu-front
