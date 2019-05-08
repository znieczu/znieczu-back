# copy project files and folders to the current working directory (i.e. 'app' folder)
FROM nginx:1.15.8
RUN apt-get update
# Install Node 10 and NPM
# Create serpe-front folder
RUN mkdir /znieczu-front
ADD . /znieczu-front/
WORKDIR /znieczu-front

RUN apt-get update && apt-get install -y yarn
RUN yarn --version

RUN rm -rf node_modules/
RUN yarn
RUN yarn build


